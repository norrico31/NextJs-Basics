import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const clientId = process.env.GH_CLIENT_ID
const clientSecret = process.env.GH_CLIENT_SECRET

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: clientId!,
            clientSecret: clientSecret!,
        }),
        // ...add more providers here
    ],
}
export default NextAuth(authOptions)