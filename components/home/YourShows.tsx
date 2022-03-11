import React from "react"
import CardYourShows from "./CardYourShows"

function YourShows() {
  return (
    <div className=" p-8 text-white">
      <h1 className="mb-8 text-2xl font-bold">Your Shows</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <CardYourShows
          text="Mr Joe Rogan?"
          image="https://imgs.search.brave.com/6rjue0t31Ce8mJk5nzzNKDOQF3rbZlC6SkxgDh0JSmk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3N0YXRp/Yy5saWJzeW4uY29t/L3AvYXNzZXRzLzcv/MS9mLzMvNzFmMzAx/NGUxNGVmMjcyMi9K/UkVpVHVuZXNJbWFn/ZTIuanBn"
        />
      </div>
    </div>
  )
}

export default YourShows
