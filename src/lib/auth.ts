import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add your providers here, for example:
    // GitHub({
    //   clientId: env.GITHUB_CLIENT_ID,
    //   clientSecret: env.GITHUB_CLIENT_SECRET,
    // }),
  ],
  pages: {
    signIn: "/login",
    // signOut: "/logout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
