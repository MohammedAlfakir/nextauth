import { type AuthOptions } from "next-auth"; // Type Smito AuthOptions
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 Day
  },
  jwt: {},
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin", // Custom Page L Sign in
  },
};
