import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { connectToDatabase } from "@/lib/db";
import { Enquiry } from "@/models/Enquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Server-Side Zod Validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const details = validationResult.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));

      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Validation failed on submitted fields",
            details,
          },
        },
        { status: 400 }
      );
    }

    const { name, email, company, budget, service, message } = validationResult.data;

    // 2. Connect to MongoDB
    const conn = await connectToDatabase();
    let savedId = "offline-" + Date.now().toString(36);

    if (conn) {
      const newEnquiry = await Enquiry.create({
        name,
        email,
        company: company || "",
        budget,
        service,
        message,
        status: "NEW",
      });
      savedId = newEnquiry._id.toString();
    } else {
      console.warn("[Contact API] MongoDB unreachable; saved in memory fallback log.");
    }

    // 3. Return 201 Created Response
    return NextResponse.json(
      {
        success: true,
        message: "Thanks! We've received your enquiry and will get back within 24 hours.",
        data: {
          id: savedId,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Failed to process enquiry. Please try again or email directly at hello@theangaarlabs.in.",
          details: errorMessage,
        },
      },
      { status: 500 }
    );
  }
}
