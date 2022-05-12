import Overview from "@components/dev_contact/Overview"
import { Tab } from "@headlessui/react"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticProps } from "next"
import Image from "next/image"
import React from "react"
import { userGithubData } from "typings"
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai"
import Projects from "@components/dev_contact/Projects"
import { AiOutlineArrowLeft } from "react-icons/ai"
import Link from "next/link"

function DevContact({ userInfo }: { userInfo: userGithubData }) {
  return (
    <div className="mx-auto flex min-h-screen w-screen flex-col overflow-x-hidden bg-spotifyBlack text-white ">
      <Link href="/">
        <a>
          <AiOutlineArrowLeft className="ml-4 mt-4 h-8 w-8 rounded-md hover:bg-primary/30 hover:text-primary" />
        </a>
      </Link>
      <h1 className="text-center text-5xl font-extrabold text-primary sm:text-6xl md:text-7xl">
        Developer Contact
      </h1>
      <div className="mx-auto my-auto flex w-full flex-col px-12 py-8 sm:flex-row sm:space-x-8 sm:p-8 xl:h-4/5 xl:w-4/5">
        <div className="mx-auto flex h-full w-4/5 flex-col items-center justify-center sm:w-2/5 md:w-1/5 md:justify-evenly">
          <div className="mask mask-circle relative h-64 w-full">
            <a href={userInfo.url}>
              <Image
                src={userInfo?.avatarUrl}
                priority
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold text-primary">
              {userInfo?.name}
            </h1>
            <h1 className="text-xl text-white">{userInfo?.login}</h1>
          </div>
          <div className="mt-8 flex space-x-4 text-white sm:mt-0">
            <a href="https://www.instagram.com/heyflemis/">
              <AiFillInstagram className="h-8 w-8 cursor-pointer hover:text-primary" />
            </a>
            <a href={userInfo.url}>
              <AiFillGithub className="h-8 w-8 cursor-pointer hover:text-primary" />
            </a>
            <a href={`mailto:${userInfo.email}`}>
              <AiFillMail className="h-8 w-8 cursor-pointer hover:text-primary" />
            </a>
          </div>
        </div>
        <div className="relative mt-8 h-full w-full rounded-lg border-[#454749] bg-neutral shadow-xl sm:mt-0 sm:w-3/5 md:w-4/5">
          <Tab.Group>
            <Tab.List className="absolute right-0 top-0 flex space-x-4 p-4">
              <Tab
                className={({ selected }) =>
                  selected ? "font-bold text-primary" : "text-white"
                }
              >
                Overview
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected ? "font-bold text-primary" : "text-white"
                }
              >
                Projects
              </Tab>
            </Tab.List>
            <Tab.Panels as="div" className="mt-4 h-full w-full md:mt-0">
              <Tab.Panel as="div" className="h-full w-full p-8">
                <Overview userInfo={userInfo} />
              </Tab.Panel>
              <Tab.Panel as="div" className="h-full w-full p-8">
                <Projects userInfo={userInfo} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

export default DevContact

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      user(login: "taldoflemis") {
        name
        avatarUrl
        url
        login
        bio
        email
        repositories(first: 20) {
          nodes {
            id
            name
            url
            updatedAt
            stargazerCount
            homepageUrl
            languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                size
                node {
                  color
                  id
                  name
                }
              }
              totalSize
            }
          }
        }
      }
    }
  `

  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
    },
  })

  const data = await client.request(query)
  return {
    props: {
      userInfo: data.user,
    },
    revalidate: 86400,
  }
}
