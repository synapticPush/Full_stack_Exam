import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";
import { PROJECTS } from "@/lib/data/projects";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const conn = await connectToDatabase();
    if (conn) {
      try {
        const dbProject = await Project.findOne({ slug });
        if (dbProject) {
          return NextResponse.json({
            success: true,
            data: {
              id: dbProject._id.toString(),
              title: dbProject.title,
              slug: dbProject.slug,
              industry: dbProject.industry,
              industryLabel: dbProject.industry,
              tagline: dbProject.tagline,
              summary: dbProject.summary,
              problem: dbProject.problem,
              solution: dbProject.solution,
              result: dbProject.result,
              metrics: dbProject.metrics,
              coverImage: dbProject.coverImage,
              gallery: dbProject.gallery,
              techStack: dbProject.techStack,
              clientName: dbProject.clientName || "",
              liveUrl: dbProject.liveUrl || "",
              year: dbProject.year,
              featured: dbProject.featured,
              order: dbProject.order,
            },
          });
        }
      } catch (err) {
        console.warn("[Project Detail API] DB error:", err);
      }
    }

    const fallbackProject = PROJECTS.find((p) => p.slug === slug);
    if (fallbackProject) {
      return NextResponse.json({
        success: true,
        data: fallbackProject,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "NOT_FOUND",
          message: `Case study with slug '${slug}' was not found.`,
        },
      },
      { status: 404 }
    );
  } catch (error) {
    console.error("[Project Slug API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Failed to retrieve case study.",
        },
      },
      { status: 500 }
    );
  }
}
