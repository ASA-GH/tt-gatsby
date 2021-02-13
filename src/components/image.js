import React from "react"
import Img from "gatsby-image"

const Image = ({banner}) => {

  // if (!{banner?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  return <Img fluid={banner.fluid}/>
  // return<div>banner</div>
}

export default Image
