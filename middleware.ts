import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authenticationRoutes = ["/authentication/start"];

export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req });

    const isAuthenticated = !!token;
    const isAuthenticationRoute = authenticationRoutes.some((route) =>
      req.nextUrl.pathname.startsWith(route)
    );

    if (isAuthenticationRoute) {
      if (isAuthenticated) return NextResponse.redirect(new URL("/", req.url));

      return null;
    }

    if (!isAuthenticated) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;

      return NextResponse.redirect(
        new URL(`/authentication/start?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/settings", "/documents", "/start", "/authentication/:path*"],
};
