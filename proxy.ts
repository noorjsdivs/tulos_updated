import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Create route matchers for protected routes
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/account(.*)",
  "/cart(.*)",
  "/wishlist(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const authObject = await auth();

  if (isProtectedRoute(req) && !authObject.userId) {
    const signInUrl = new URL(
      `/signin?redirect_url=${req.nextUrl.pathname}`,
      req.url
    );
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
