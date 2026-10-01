import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  industry: "REAL_ESTATE" | "CAFE" | "CLOTHING" | "HEALTHCARE" | "CRM" | "ECOMMERCE" | "AI_SYSTEMS" | "OTHER";
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  coverImage: string;
  gallery: string[];
  techStack: string[];
  clientName?: string;
  liveUrl?: string;
  year: number;
  featured: boolean;
  order: number;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    industry: {
      type: String,
      required: true,
      enum: ["REAL_ESTATE", "CAFE", "CLOTHING", "HEALTHCARE", "CRM", "ECOMMERCE", "AI_SYSTEMS", "OTHER"],
    },
    tagline: { type: String, required: true },
    summary: { type: String, required: true },
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    result: { type: String, required: true },
    metrics: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    coverImage: { type: String, required: true },
    gallery: [{ type: String }],
    techStack: [{ type: String }],
    clientName: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    year: { type: Number, default: 2025 },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
