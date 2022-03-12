import { signOut } from "next-auth/react"
import Image from "next/image"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

interface Props {
  username?: string
}

function Navbar({ username }: Props) {
  return (
    <div className="mt-2 flex h-14 w-full items-center justify-between p-6">
      <div className="flex space-x-8">
        <AiOutlineLeft className="h-9 w-9 cursor-pointer rounded-full bg-spotifyBlack/80 p-1 text-white" />
        <AiOutlineRight className="h-9 w-9 cursor-pointer rounded-full bg-spotifyBlack/80 p-1 text-white" />
      </div>
      <button
        className="btn flex space-x-4 rounded-full bg-spotifyBlack/80 hover:bg-neutral/80"
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        <div className="relative h-8 w-8 rounded-full">
          <Image
            src="https://imgs.search.brave.com/6rjue0t31Ce8mJk5nzzNKDOQF3rbZlC6SkxgDh0JSmk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3N0YXRp/Yy5saWJzeW4uY29t/L3AvYXNzZXRzLzcv/MS9mLzMvNzFmMzAx/NGUxNGVmMjcyMi9K/UkVpVHVuZXNJbWFn/ZTIuanBn"
            alt="mr joe rogan"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <p>{username}</p>
      </button>
    </div>
  )
}

export default Navbar
