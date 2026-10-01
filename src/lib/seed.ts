import dns from "node:dns";
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch {
  // ignore
}

import mongoose from "mongoose";
import { connectToDatabase } from "./db";
import { Project } from "../models/Project";
import { Enquiry } from "../models/Enquiry";
import { PROJECTS } from "./data/projects";

async function seed() {
  console.log("🔥 Starting The Angaar Labs Database Seeding...");
  const conn = await connectToDatabase();
  if (!conn) {
    console.error("❌ Failed to connect to MongoDB. Make sure MONGODB_URI is reachable.");
    process.exit(1);
  }

  try {
    console.log("Clearing existing projects collection...");
    await Project.deleteMany({});

    console.log(`Seeding ${PROJECTS.length} flagship case studies...`);
    for (const proj of PROJECTS) {
      await Project.create({
        title: proj.title,
        slug: proj.slug,
        industry: proj.industry,
        tagline: proj.tagline,
        summary: proj.summary,
        problem: proj.problem,
        solution: proj.solution,
        result: proj.result,
        metrics: proj.metrics,
        coverImage: proj.coverImage,
        gallery: proj.gallery,
        techStack: proj.techStack,
        clientName: proj.clientName,
        liveUrl: proj.liveUrl,
        year: proj.year,
        featured: proj.featured,
        order: proj.order,
      });
    }

    console.log("Seeding sample initial enquiries...");
    await Enquiry.deleteMany({});
    await Enquiry.create([
      {
        name: "Rahul Mehta",
        email: "rahul@cafedelight.in",
        company: "Cafe Delight",
        budget: "$25k-$50k",
        service: "Full-Stack Web Engineering",
        message: "We need a high-performance modern website and table booking system for our new cafe chain.",
        status: "NEW",
        createdAt: new Date(),
      },
      {
        name: "Dr. Ananya Iyer",
        email: "aiyer@medflowhealth.org",
        company: "MedFlow Systems",
        budget: "$50k+",
        service: "Agentic AI Systems",
        message: "Looking to scale our clinical decision support copilot across 14 hospital networks.",
        status: "READ",
        createdAt: new Date(Date.now() - 86400000),
      },
    ]);

    console.log("✅ Seeding completed successfully into MongoDB Atlas!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error while seeding database:", error);
    process.exit(1);
  }
}

seed();
