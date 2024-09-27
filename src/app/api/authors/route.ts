import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const authors = await prisma.author.findMany();

    return NextResponse.json(authors);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const { name, githubUrl, imageUrl } = await request.json();

    const newButton = await prisma.author.create({
      data: {
        name,
        githubUrl,
        imageUrl,
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
