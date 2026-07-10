import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
export function proxy(req: NextRequest) {
  // Your proxy or routing logic here
  const token = req.cookies.get("token")?.value;
  const isLoginPage = req.nextUrl.pathname === "/admin/login";
  if (!token) {
    if (isLoginPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    if (isLoginPage) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}
export const config = {
  // Limit the paths this proxy runs on
  matcher: "/admin/:path*",
};
