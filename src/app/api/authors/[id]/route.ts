import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";

interface Params {
  params: { id: number };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const author = await prisma.author.findFirst({
      where: { id: Number(params.id) },
    });

    if (!author) {
      return NextResponse.json(
        { message: "Author Not Found" },
        { status: 404 }
      );
    }
    return NextResponse.json(author);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

// DELETE este no sera utilizado, solo esta por si acaso.
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedAuthor = await prisma.author.delete({
      where: { id: params.id },
    });
    if (!deletedAuthor)
      return NextResponse.json(
        { message: "Author not found" },
        { status: 404 }
      );

    return NextResponse.json(deletedAuthor);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Author not found",
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
