import FanAlsoLike from "@components/artists/cards/FanAlsoLike"
import { useQuery } from "hooks/useQuery"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"
import { AlbumsData } from "typings"
import cl from "clsx"
import HomeLayout from "@components/layouts/HomeLayout"
import Navbar from "@components/home/Navbar"

function RelatedArtists() {
  const router = useRouter()
  const { data: session } = useSession()
  const { data: relatedArtists } = useQuery<AlbumsData[]>(
    `/api/artists/${router.query.id}/related-artists`
  )
  return (
    <main className="text-white">
      <Navbar
        username={session?.user.username}
        userimage={session?.user.image}
      />
      <div className="flex flex-col p-8">
        <h1 className="mb-6 text-2xl">Fans also like</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {relatedArtists?.map((album, index) => (
            <FanAlsoLike
              key={album.id}
              id={album.id}
              name={album.name}
              image={album.images[1].url}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default RelatedArtists

RelatedArtists.PageLayout = HomeLayout
