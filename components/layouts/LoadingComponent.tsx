import React from "react"
import Spinner from "@svgs/trailSpinner.svg"

function LoadingComponent() {
  return (
    <div className="my-auto mx-auto">
      <Spinner className="h-16 w-16 text-primary" />{" "}
    </div>
  )
}

export default LoadingComponent
