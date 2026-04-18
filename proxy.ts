import { auth } from "@/auth"
import { NextResponse } from 'next/server';


// export default auth((request) => {
//   const session = request.auth;
//   const { nextUrl } = request
//   if (!session) {
//     return NextResponse.redirect(new URL('/', nextUrl));
//   }
// })
 

// export const config = {
//   matcher: '/profile/:path*'
// }