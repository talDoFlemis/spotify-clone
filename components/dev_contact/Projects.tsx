import Image from "next/image"
import { userGithubData } from "typings"
import { AiFillGithub } from "react-icons/ai"
import { BsGlobe } from "react-icons/bs"

function Projects({ userInfo }: { userInfo: userGithubData }) {
  const sortedProjects = userInfo.repositories.nodes.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

  return (
    <div className="flex w-full flex-col space-y-8">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 place-content-center place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((repo) => (
          <a
            href={repo.homepageUrl ? repo.homepageUrl : repo.url}
            key={repo.id}
            className="group h-56 w-full overflow-hidden rounded-md bg-white transition-transform hover:scale-110 hover:cursor-pointer sm:h-40"
          >
            <div className="relative my-auto h-full w-full">
              <Image
                src={`https://raw.githubusercontent.com/talDoFlemis/${repo.name}/main/.github/home.png`}
                alt=""
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute bottom-0 z-50 flex w-full items-center justify-between bg-spotifyBlack px-2 py-1">
                <p className="text-center">{repo.name}</p>
                <div className="flex space-x-2">
                  <a href={repo.url}>
                    <AiFillGithub className="h-4 w-4 hover:text-primary" />
                  </a>
                  {repo.homepageUrl && (
                    <a href={repo.homepageUrl}>
                      <BsGlobe className="h-4 w-4 hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
