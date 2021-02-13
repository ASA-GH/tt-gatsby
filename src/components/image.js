import React from "react"
import Img from "gatsby-image"

const Image = ({ banner }) => {
  if (!banner.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={banner.fluid} />
}

export default Image
