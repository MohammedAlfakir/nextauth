import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse, NextRequest } from "next/server";

export default withAuth(
  async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname; //Here Where i store path where i'm to var
    const isAuth = await getToken({ req: request }); // Here Where i check if Token is true if true thats means is Signin and i store it at Var
    const protectedRoutes = ["/profile"]; // Here Is the protected Pages
    const isAuthRoute = pathname.startsWith("/signin"); // Here is store path Who start with signin
    const isProtectedRoute = protectedRoutes.some(route =>
      pathname.startsWith(route)
    ); // Hna kandir retun l ila kan protected page hiya hadi kayrje3 true ola false

    if (!isAuth && isProtectedRoute) {
      //Hna Golt lih ila makanch token o dkhol l protected page ya3ni token = true o protected page = true
      // bghitek t dir rederacted l signin
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    if (isAuth && isAuthRoute) {
      // Ila konti sign in ya3ni isAuth fiha token = true
      // o bghiti dkhol lpath dyalk isAuthRoute li huwa sign in = true
      //ya3ni nta deja sign in o dkhalti page sign in fa dir li hadshi li ltaht
      return NextResponse.redirect(new URL("/profile", request.url));
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
  matcher: ["/profile/:path*", "/signin/:path*"],
};
