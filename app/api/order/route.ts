import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    return NextResponse.json({
      success: "true",
      message: "order is working",
    });
  } catch {
    return NextResponse.json({
      message: "Error occure",
    });
  }
};
