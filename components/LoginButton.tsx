"use client"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import Profile from "@/components/Profile";

export default function LoginButton() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <button onClick={() => signIn("github")}>
        Sign in with GitHub
      </button>
    )
  } 
  else {
    <Profile/>
  }
}