import { auth } from "@/auth"
import { NextResponse } from 'next/server';

export default auth((request) => {
  const isLoggedIn = !!request.auth;
  const { nextUrl } = request
  console.log(!isLoggedIn)
  console.log("signed-out " + String(!request.nextUrl.pathname.startsWith('/signed-out')))
  console.log("api " + String(!request.nextUrl.pathname.startsWith('/api')))

  if (!isLoggedIn && !request.nextUrl.pathname.startsWith('/signed-out') && !request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.redirect(new URL('/signed-out', nextUrl));
  }
})