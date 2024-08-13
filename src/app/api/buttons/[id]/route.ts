import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";

interface Params {
  params: { id: number };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const button = await prisma.button.findFirst({
      where: { id: Number(params.id) },
    });

    if (!button) {
      return NextResponse.json(
        { message: "Button Not Found" },
        { status: 404 }
      );
    }
    return NextResponse.json(button);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

// DELETE este no sera utilizado, solo esta por si acaso.
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedButton = await prisma.button.delete({
      where: { id: params.id },
    });
    if (!deletedButton)
      return NextResponse.json(
        { message: "Button not found" },
        { status: 404 }
      );

    return NextResponse.json(deletedButton);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Button not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
