import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await cloudinary.api.ping();

    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        error: error,
        message: error instanceof Error && error.message,
        //  stack: error.stack
      },
      { status: 500 },
    );
  }
}
