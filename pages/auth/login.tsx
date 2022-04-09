import ModalNotImplemented from "@components/layouts/ModalNotImplemented"
import { signIn } from "next-auth/react"
import React, { useState } from "react"
import { BsSpotify } from "react-icons/bs"

function Login() {
  const [isModalVisible, setModalVisible] = useState(false)
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 bg-spotifyBlack">
      <ModalNotImplemented
        text="Due to limited time, and just one guy working on the project, this functionality was not made yet"
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <BsSpotify className="h-56 w-56 text-primary" />
      <button
        className="btn bg-neutral text-white"
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
      >
        Login in with spotify
      </button>
      <button
        className="btn bg-neutral text-white"
        onClick={() => setModalVisible(true)}
      >
        Continue without spotify
      </button>
    </div>
  )
}

export default Login
