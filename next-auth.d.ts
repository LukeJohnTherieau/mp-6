import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Extends the built-in User interface
   */
  interface User {
    username?: string | null
  }

  /**
   * Extends the built-in session.user object
   */
  interface Session {
    user: {
      username?: string | null
    } & DefaultSession["user"]
  }
}
