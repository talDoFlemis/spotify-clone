import { signIn } from "next-auth/react"
import React from "react"
import { BsSpotify } from "react-icons/bs"

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 bg-spotifyBlack">
      <BsSpotify className="h-56 w-56 text-primary" />
      <button
        className="btn bg-neutral text-white"
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
      >
        Login in with spotify
      </button>
      <button className="btn bg-neutral text-white">
        Continue without spotify
      </button>
    </div>
  )
}

export default Login
