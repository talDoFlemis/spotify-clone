import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillHeart,
} from "react-icons/ai"
import { BiLibrary } from "react-icons/bi"
import { RiContactsFill } from "react-icons/ri"
import { FiRadio } from "react-icons/fi"
import { PlaylistData } from "typings"
import { useQuery } from "hooks/useQuery"
import Link from "next/link"
import LoadingComponent from "@components/layouts/LoadingComponent"
import LinkButton from "@components/layouts/LinkButton"
import { useRouter } from "next/router"
import cl from "clsx"
import { useState } from "react"
import ModalNotImplemented from "./ModalNotImplemented"

function Sidebar() {
  const { data: playlists, error } =
    useQuery<PlaylistData[]>("/api/getPlaylists")
  const { pathname, query } = useRouter()

  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <aside className="hidden h-full w-60 select-none flex-col items-center bg-black text-sm text-base-100 sm:flex">
      <ModalNotImplemented
        text="Due to limited time, and just one guy working on the project, this functionality was not made yet"
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <div className="w-full space-y-2 p-6">
        {pathname === "/" ? (
          <LinkButton
            Icon={AiFillHome}
            text="Home"
            link="/"
            className="text-white"
          />
        ) : (
          <LinkButton Icon={AiFillHome} text="Home" link="/" />
        )}
        <div
          className="group flex cursor-pointer items-center space-x-4  transition-all hover:text-white"
          onClick={() => setModalVisible(true)}
        >
          <AiOutlineSearch className="h-8 w-8 " />
          <p>Search</p>
        </div>
        <div
          className="group flex cursor-pointer items-center space-x-4  transition-all hover:text-white"
          onClick={() => setModalVisible(true)}
        >
          <BiLibrary className="h-8 w-8 " />
          <p>Library</p>
        </div>
        {pathname === "/dev_contact" ? (
          <LinkButton
            Icon={RiContactsFill}
            text="Dev Contact"
            link="/dev_contact"
            className="text-white"
          />
        ) : (
          <LinkButton
            Icon={RiContactsFill}
            text="Dev Contact"
            link="/dev_contact"
          />
        )}
      </div>
      <div className="w-full space-y-2 p-6">
        <div
          className="group flex cursor-pointer items-center space-x-4  transition-all hover:text-white"
          onClick={() => setModalVisible(true)}
        >
          <AiOutlinePlus className="h-8 w-8 rounded-md bg-white/70 text-black transition-all group-hover:bg-white" />{" "}
          <p>Create Playlist</p>
        </div>
        <div
          className="group flex cursor-pointer items-center space-x-4  transition-colors hover:text-white"
          onClick={() => setModalVisible(true)}
        >
          <AiFillHeart className="h-8 w-8 rounded-md bg-gradient-to-br from-[#3b1ba9] via-[#3b1ba9] to-white p-2  group-hover:from-[#4620c5] group-hover:via-[#4620c5]" />{" "}
          <p>Liked songs</p>
        </div>
        <div
          className="group flex cursor-pointer items-center space-x-4  hover:text-white"
          onClick={() => setModalVisible(true)}
        >
          <FiRadio className="h-8 w-8 rounded-md bg-green-800/80 text-green-500 transition-colors group-hover:bg-green-800 group-hover:text-green-400" />{" "}
          <p>Your episodes</p>
        </div>
      </div>
      <div className="mb-4 h-[0.125rem] w-full bg-base-100 px-6"></div>
      {!playlists && !error ? (
        <LoadingComponent className="w-60" />
      ) : (
        <div className="w-60 space-y-3 overflow-y-auto scroll-smooth px-6 transition-all scrollbar scrollbar-track-transparent scrollbar-thumb-neutral hover:scrollbar-thumb-neutral-focus">
          {playlists?.map((playlist) => (
            <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
              <a
                className={cl(
                  query.id === `${playlist.id}` && "text-white",
                  "block cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-white"
                )}
              >
                {playlist.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </aside>
  )
}

export default Sidebar
