import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = req.url;
    const id = url.split("product/")[1];
    const singleProduct = await prisma.products.findUnique({
      where: { id: id },
    });
    return NextResponse.json(
      {
        success: true,
        singleProduct,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Internal Server Error ",
      },
      { status: 500 }
    );
  }
};
