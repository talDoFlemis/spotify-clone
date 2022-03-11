import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillHeart,
} from "react-icons/ai"
import { BiLibrary } from "react-icons/bi"
import { FiRadio } from "react-icons/fi"
import { useQuery } from "hooks/useQuery"

interface Post {
  title: string
}

function Sidebar() {
  const { data: posts } = useQuery(
    "https://jsonplaceholder.typicode.com/albums"
  )
  return (
    <aside className="flex h-full w-72 flex-col items-center bg-black text-sm text-base-100">
      <div className="w-full space-y-2 p-6">
        <div className="flex cursor-pointer items-center space-x-4  transition-colors hover:text-white">
          <AiFillHome className="h-8 w-8" /> <p>Home</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-4  transition-colors hover:text-white">
          <AiOutlineSearch className="h-8 w-8" /> <p>Search</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-4  transition-colors hover:text-white">
          <BiLibrary className="h-8 w-8" /> <p>Library</p>
        </div>
      </div>
      <div className="w-full space-y-2 p-6">
        <div className="group flex cursor-pointer items-center space-x-4  transition-all hover:text-white">
          <AiOutlinePlus className="h-8 w-8 rounded-md bg-white/70 text-black transition-all group-hover:bg-white" />{" "}
          <p>Create Playlist</p>
        </div>
        <div className="group flex cursor-pointer items-center space-x-4  transition-colors hover:text-white">
          <AiFillHeart className="h-8 w-8 rounded-md bg-gradient-to-br from-[#3b1ba9] via-[#3b1ba9] to-white p-2  group-hover:from-[#4620c5] group-hover:via-[#4620c5]" />{" "}
          <p>Liked songs</p>
        </div>
        <div className="group flex cursor-pointer items-center space-x-4  hover:text-white">
          <FiRadio className="h-8 w-8 rounded-md bg-green-800/80 text-green-500 transition-colors group-hover:bg-green-800 group-hover:text-green-400" />{" "}
          <p>Your episodes</p>
        </div>
      </div>
      <div className="mb-4 h-1 w-full bg-base-100 px-6"></div>
      <div className="w-full overflow-y-auto px-6 transition-all scrollbar scrollbar-track-transparent scrollbar-thumb-neutral hover:scrollbar-thumb-neutral-focus">
        {posts?.map((post: Post) => (
          <p key={post.title}>{post.title}</p>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
