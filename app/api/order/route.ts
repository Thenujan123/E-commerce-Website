import { Products } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface cardItem {
  product: Products;
  qty: number;
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const cardItems = body as cardItem[];

    const amount = Number(
      cardItems.reduce((accu, item) => accu + item.product.price * item.qty, 0)
    ).toFixed(2);

    const status = "Pending";

    const order = await prisma.order.create({
      data: {
        cardItems: cardItems as any,
        amount: parseFloat(amount),
        status,
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Order creation failed:", error);

    return NextResponse.json(
      {
        message: "Error occurred",
      },
      { status: 500 }
    );
  }
};
