import { NextApiRequest } from "next"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req: NextApiRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === "production",
  })

  const url = req.url as string
  const parsedUrl = new URL(url)

  if (token || parsedUrl.pathname.includes("/api/auth")) {
    return NextResponse.next()
  }

  if (!token && parsedUrl.pathname.includes("notlogged")) {
    return NextResponse.next()
  }

  if (!token && parsedUrl.pathname !== "/auth/login") {
    parsedUrl.pathname = "/auth/login"
    return NextResponse.redirect(parsedUrl)
  }
}
