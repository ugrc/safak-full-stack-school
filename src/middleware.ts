import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

console.log(matchers);

export default clerkMiddleware(async(auth, req) => {
  // if (isProtectedRoute(req)) auth().protect()

  const { sessionClaims } = auth();

  console.log(sessionClaims);

  const role = (sessionClaims?.metadata as { role?: string })?.role;

// role is undefined can be solved as below:
 // If you have problems cant access the sessionClaims 
// for following the tutorial in chapters NEXT.JS Protect Routes With User Role
// 2:35:06 - 2:36:06
// export default clerkMiddleware(async (auth, req) => {

//   const { sessionClaims } = await auth();

// you have to add the async and await functions because the clerk there using Promise to access that payload from sessionClaims

// big love for you lamaDev for this precious tutorial


  console.log(role);

  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && !allowedRoles.includes(role!)) {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
