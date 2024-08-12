import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const buttons = await prisma.button.findMany();
  return NextResponse.json({ buttons });
}

export async function POST(request: Request) {
  try {
    const { categoria, tamano, estilo, htmlCode, cssCode, tailwindCode } =
      await request.json();

    const newButton = await prisma.button.create({
      data: {
        categoria,
        tamano,
        estilo,
        htmlCode,
        cssCode,
        tailwindCode,
      },
    });

    return NextResponse.json(newButton);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    }
  }
}
