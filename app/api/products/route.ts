import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await prisma.$connect();
    const allProducts = await prisma.products.findMany({});
    return NextResponse.json(
      {
        success: true,
        allProducts,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Internal Server Error ",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
