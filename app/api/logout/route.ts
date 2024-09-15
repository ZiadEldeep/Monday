// /app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out successfully" });

  // Clear the authToken and userId cookies
  response.cookies.delete("authToken");
  response.cookies.delete("userId");

  return response;
}
