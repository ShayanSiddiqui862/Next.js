import { createRouteMatcher , clerkMiddleware } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

const isProtectedRoute = createRouteMatcher(["/check.tsx(.*)"]);
const isStudioRoute = createRouteMatcher(["/studio(.*)"]);

export default clerkMiddleware(async (auth:any, req:any) => {
  const authObject = await auth();
  const { userId } = authObject;

  if (isStudioRoute(req)) {
    if (!userId) {
      return authObject.redirectToSignIn();
    }
    
    const user = await clerkClient.users.getUser(userId);
    const userRole = user?.publicMetadata?.role;
    if (userRole !== "admin") {
      return new Response("Forbidden", { status: 403 });
    }
  }

  if (isProtectedRoute(req)) {
    await authObject.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|studio|trpc)(.*)",
  ],
};
