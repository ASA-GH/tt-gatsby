import React from "react"
import styled from "styled-components"
import PostTitle from "./PostTitle"
import Blog from "./blog/Blog"
import PropTypes from "prop-types"

const Content = styled.div`
  min-width: 1160px;
  max-width: 1200px;
  max-height: max-content;
  min-height: 753px;
  margin: 102px auto 106px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
`
const TemplatePost = ({ data }) => {
  return (
    <Content>
      <PostTitle data={data} />
      <Blog data={data} />
    </Content>
  )
}

PostTitle.propTypes = {
  PostTitle: PropTypes.node.isRequired,
  Blog: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

PostTitle.defaultProps = {
  PostTitle: ``,
  Blog: ``,
  data: {},
}

export default TemplatePost
