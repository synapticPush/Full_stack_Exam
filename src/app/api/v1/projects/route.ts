import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";
import { PROJECTS } from "@/lib/data/projects";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const industry = searchParams.get("industry");
    const featured = searchParams.get("featured");

    const conn = await connectToDatabase();
    let projects = PROJECTS;

    if (conn) {
      try {
        const query: Record<string, unknown> = {};
        if (industry && industry !== "ALL") {
          query.industry = industry;
        }
        if (featured === "true") {
          query.featured = true;
        }
        const dbProjects = await Project.find(query).sort({ order: 1, createdAt: -1 });
        if (dbProjects && dbProjects.length > 0) {
          projects = dbProjects.map((p) => ({
            id: p._id.toString(),
            title: p.title,
            slug: p.slug,
            industry: p.industry,
            industryLabel: p.industry,
            tagline: p.tagline,
            summary: p.summary,
            problem: p.problem,
            solution: p.solution,
            result: p.result,
            metrics: p.metrics,
            coverImage: p.coverImage,
            gallery: p.gallery,
            techStack: p.techStack,
            clientName: p.clientName || "",
            liveUrl: p.liveUrl || "",
            year: p.year,
            featured: p.featured,
            order: p.order,
          }));
        }
      } catch (err) {
        console.warn("[Projects API] DB query error, using structured repository fallback:", err);
      }
    }

    // Filter in-memory if DB was fallback
    let filtered = projects;
    if (industry && industry !== "ALL") {
      filtered = filtered.filter((p) => p.industry.toUpperCase() === industry.toUpperCase());
    }
    if (featured === "true") {
      filtered = filtered.filter((p) => p.featured);
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      total: filtered.length,
    });
  } catch (error) {
    console.error("[Projects API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Failed to fetch projects.",
        },
      },
      { status: 500 }
    );
  }
}
