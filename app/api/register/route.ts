import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {prisma} from "@/lib/prismaClient";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ user }, { status: 201 });
}
