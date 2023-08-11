import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withAuth(
  async function middleware(req: NextRequest) {
    const authenticationRoutes = ['/authentication/start'];
    const token = await getToken({ req });

    const isAuthenticated = !!token;
    const isAuthenticationRoute = authenticationRoutes.some((route) =>
      req.nextUrl.pathname.startsWith(route)
    );

    if (isAuthenticationRoute) {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/home', req.url));
      }

      return null;
    }

    const hasCompletedOnboarding = token?.onboarding;
    const isOnboardingRoute = req.nextUrl.pathname === '/start';

    if (isAuthenticated && hasCompletedOnboarding && isOnboardingRoute) {
      return NextResponse.redirect(new URL('/home', req.url));
    }

    const isMainRoute = mainPaths.some((route) =>
      req.nextUrl.pathname.startsWith(route)
    );

    if (isAuthenticated && !hasCompletedOnboarding && isMainRoute) {
      return NextResponse.redirect(new URL('/start', req.url));
    }

    if (!isAuthenticated) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;

      return NextResponse.redirect(
        new URL(
          `/authentication/start?from=${encodeURIComponent(from)}`,
          req.url
        )
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

const basePaths = ['/'];
const mainPaths = ['/home', '/settings'];
const authenticationPaths = ['/start', '/authentication/:path*'];
const publicationPaths = ['/p/create'];

export const config = {
  matcher: [
    ...basePaths,
    ...mainPaths,
    ...authenticationPaths,
    ...publicationPaths,
  ],
};
