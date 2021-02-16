import React from "react"
import Image from "../../components/image"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  width: 360px;
  height: max-content;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-row: repeat(2, max-content);
  grid-row-gap: 36px;
`
const Img = styled.div`
  width: 360px;
  height: 305px;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
`
const Title = styled.div`
  width: 360px;
  max-height: max-content;
  min-height: 44px;
  margin: 0;
  padding: 0;
`
const Text = styled.div`
  padding: 0;
  color: #000;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 138%;
  margin: 0;
  overflow: hidden;
`
const PostTitle = ({ data }) => {
  return (
    <Wrapper>
      <Img>
        <Image banner={data.banner} />
      </Img>
      <Title>
        <Text>{data.title}</Text>
      </Title>
    </Wrapper>
  )
}

PostTitle.propTypes = {
  Image: PropTypes.node.isRequired,
  Text: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

PostTitle.defaultProps = {
  Image: ``,
  Text: ``,
  data: {},
}

export default PostTitle
