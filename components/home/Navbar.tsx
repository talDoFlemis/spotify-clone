import { signOut } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

interface Props {
  username?: string
  userimage?: string | null
}

function Navbar({ username, userimage }: Props) {
  const router = useRouter()
  return (
    <div className="mt-2 flex h-14 w-full items-center justify-between p-6">
      <div className="flex space-x-8">
        <AiOutlineLeft
          className="h-9 w-9 cursor-pointer rounded-full bg-spotifyBlack/80 p-1 text-white"
          onClick={() => router.back()}
        />
        <AiOutlineRight
          className="h-9 w-9 cursor-pointer rounded-full bg-spotifyBlack/80 p-1 text-white"
          onClick={() => history.forward()}
        />
      </div>
      <button
        className="space-x-4 sm:btn sm:rounded-full sm:bg-spotifyBlack/80 sm:hover:bg-neutral/80"
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        <div className="relative h-8 w-8 rounded-full">
          {userimage ? (
            <Image
              src={userimage}
              alt="mr joe rogan"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          ) : (
            <Image
              src="https://imgs.search.brave.com/6rjue0t31Ce8mJk5nzzNKDOQF3rbZlC6SkxgDh0JSmk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3N0YXRp/Yy5saWJzeW4uY29t/L3AvYXNzZXRzLzcv/MS9mLzMvNzFmMzAx/NGUxNGVmMjcyMi9K/UkVpVHVuZXNJbWFn/ZTIuanBn"
              alt="mr joe rogan"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          )}
        </div>
        <p className="hidden sm:flex">{username}</p>
      </button>
    </div>
  )
}

export default Navbar
