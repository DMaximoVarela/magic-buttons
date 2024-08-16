import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const categoria = searchParams.get("categoria");
    const tamano = searchParams.get("tamano");
    const estilo = searchParams.get("estilo");

    const where: any = {};

    if (id) {
      where.id = Number(id);
    }

    if (categoria) {
      where.categoria = categoria;
    }

    if (estilo) {
      where.estilo = estilo;
    }

    if (tamano) {
      where.tamano = tamano;
    }

    const buttons = await prisma.button.findMany({
      where,
    });

    return NextResponse.json(buttons);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

// EXAMPLE: GET localhost:3000/api/buttons?categoria=Hover&tamano=Pequeño&estilo=Gradiente

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
