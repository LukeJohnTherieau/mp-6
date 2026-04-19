import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";


export const { handlers, auth, signIn, signOut } = NextAuth(
    {
        providers: [
            GitHubProvider(
                {
                    clientId: process.env.AUTH_GITHUB_ID ?? "",
                    clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
                    profile(profile) {
                        return {
                            id: profile.id.toString(),
                            name: profile.name ?? profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                            username: profile.login,
                        }
                    }
                }
            )
        ],
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            async jwt({ token, user, profile }) {
                if (user) {
                    token.username = user.username;
                }
                return token;
            },
            async session({ session, token }) {
                if (session.user) {
                    session.user.username = token.username as string;
                }
                return session;
            },
        }
    }
)