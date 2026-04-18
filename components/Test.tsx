"use client"
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'

export default function Test() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        {/* <Image width="150" height="150" alt = "User Profile Picture" src = {session.user?.image ?? ""}></Image> */}
        <p>{session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } 
}