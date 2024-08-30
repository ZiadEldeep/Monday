import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prismaClient";

const secret = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "1h" });

  const response = NextResponse.json(
    { message: "Login successful" },
    { status: 200 }
  );

  response.cookies.set("authToken", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 1 month
  });
  return response;
}
