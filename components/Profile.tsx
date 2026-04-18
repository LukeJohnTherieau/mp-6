"use client"
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'

export default function Profile() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={150}
            height={150}
            alt={`Profile Picture`}
            priority={true}
          />
        ) : null}
        <p>{session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
}