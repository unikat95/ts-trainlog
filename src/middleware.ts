import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: Request) {
  const cookieStore = await cookies();
  const userLoggedIn = cookieStore.get("loggedIn");

  const currentUrl = new URL(req.url).pathname;

  if (userLoggedIn && currentUrl === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!userLoggedIn && currentUrl.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
