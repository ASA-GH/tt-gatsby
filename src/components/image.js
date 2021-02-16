import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

const Text = styled.div`
  padding: 0;
  margin: 0;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
`
const Image = ({ banner }) => {
  if (!banner.fluid) {
    return <Text>Picture not found</Text>
  }

  return <Img fluid={banner.fluid} />
}

Image.propTypes = {
  Text: PropTypes.string.isRequired,
  Img: PropTypes.node.isRequired,
  banner: PropTypes.object.isRequired,
}
Image.defaultProps = {
  Text: ``,
  Img: ``,
  banner: {},
}

export default Image
