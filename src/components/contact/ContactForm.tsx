"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { contactFormSchema, ContactFormData } from "@/lib/validations";

const BUDGET_OPTIONS = [
  { value: "<$10k", label: "< $10,000" },
  { value: "$10k-$25k", label: "$10k - $25k" },
  { value: "$25k-$50k", label: "$25k - $50k" },
  { value: "$50k+", label: "$50,000+" },
  { value: "Undecided", label: "Undecided / Flexible" },
];

const SERVICE_OPTIONS = [
  "Agentic AI Systems",
  "Full-Stack Web Engineering",
  "SaaS Platform Engineering",
  "Enterprise Dashboards & BI",
  "Mobile App Development",
  "AI Automation & Workflows",
  "Cloud Infrastructure & DevOps",
  "Custom Enterprise Software",
  "Other / General Inquiry",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    budget: "Undecided",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // 1. Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setSubmissionId(data.data?.id || "REC-" + Date.now().toString().slice(-6));
      } else {
        setServerError(
          data.error?.message || "Failed to submit enquiry. Please try again."
        );
      }
    } catch (err) {
      console.error("[Submit Error]", err);
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "Undecided",
      service: SERVICE_OPTIONS[0],
      message: "",
    });
    setIsSuccess(false);
    setSubmissionId(null);
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border-ember/40 shadow-ember text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-ember/15 border border-ember/40 flex items-center justify-center text-ember mb-6 animate-pulse">
          <CheckCircle2 className="w-8 h-8 text-gold" />
        </div>

        <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">
          Transmission Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-smoke-white mb-4">
          Thank You, {formData.name}!
        </h3>

        <p className="text-sm sm:text-base text-ash max-w-md mb-6 leading-relaxed font-sans">
          Your project specifications have been ingested into our engineering queue. Our lead architect will review your requirements and reach out within{" "}
          <strong className="text-smoke-white">4 hours</strong>.
        </p>

        {submissionId && (
          <div className="mb-8 px-4 py-2 rounded-xl bg-surface-subtle border border-surface-border text-xs font-mono text-ash">
            Inquiry Ref: <span className="text-ember-light font-bold">{submissionId}</span>
          </div>
        )}

        <Button onClick={handleReset} variant="outline" size="sm">
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl glass-panel border-surface-border relative overflow-hidden"
    >
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ember/10 blur-[90px] pointer-events-none rounded-full" />

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono uppercase text-smoke-white font-medium mb-2">
            Your Name <span className="text-ember">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Mehta"
            className={`w-full bg-surface-subtle border rounded-xl px-4 py-3 text-sm text-smoke-white placeholder:text-ash-dark focus:outline-none transition-colors ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-surface-border focus:border-ember"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase text-smoke-white font-medium mb-2">
            Business Email <span className="text-ember">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rahul@company.com"
            className={`w-full bg-surface-subtle border rounded-xl px-4 py-3 text-sm text-smoke-white placeholder:text-ash-dark focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-surface-border focus:border-ember"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Company */}
        <div>
          <label className="block text-xs font-mono uppercase text-smoke-white font-medium mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Cafe Delight"
            className="w-full bg-surface-subtle border border-surface-border rounded-xl px-4 py-3 text-sm text-smoke-white placeholder:text-ash-dark focus:outline-none focus:border-ember transition-colors"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-mono uppercase text-smoke-white font-medium mb-2">
            Estimated Budget <span className="text-ember">*</span>
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-surface-subtle border border-surface-border rounded-xl px-4 py-3 text-sm text-smoke-white focus:outline-none focus:border-ember transition-colors"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-surface text-smoke-white">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-1.5 text-xs text-red-400">{errors.budget}</p>
          )}
        </div>
      </div>

      {/* Service Category */}
      <div className="mb-6">
        <label className="block text-xs font-mono uppercase text-smoke-white font-medium mb-2">
          Primary Service Required <span className="text-ember">*</span>
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-surface-subtle border border-surface-border rounded-xl px-4 py-3 text-sm text-smoke-white focus:outline-none focus:border-ember transition-colors"
        >
          {SERVICE_OPTIONS.map((srv) => (
            <option key={srv} value={srv} className="bg-surface text-smoke-white">
              {srv}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-xs font-mono uppercase text-smoke-white font-medium mb-2">
          Project Brief / System Requirements <span className="text-ember">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current system bottlenecks, target audience, timeline, and key technical goals..."
          className={`w-full bg-surface-subtle border rounded-xl px-4 py-3 text-sm text-smoke-white placeholder:text-ash-dark focus:outline-none transition-colors ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-surface-border focus:border-ember"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full shadow-ember-lg"
        isLoading={isLoading}
        rightIcon={<Send className="w-4 h-4" />}
      >
        Submit Project Inquiry
      </Button>

      <p className="mt-4 text-center text-xs font-mono text-ash-dark">
        Strict NDA protection • Sub-4hr SLA response • Direct access to lead architects
      </p>
    </form>
  );
}
