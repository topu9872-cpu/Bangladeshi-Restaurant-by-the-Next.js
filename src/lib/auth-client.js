import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
   
    baseURL: BETTER_AUTH_URL
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()