import React from "react"
import Image from "../../../components/image"
import styled from "styled-components"
import PropTypes from "prop-types"
import MetaData from "./MetaData"

// import SEO from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Inner = styled.div`
  width: 670px;
  max-height: max-content;
  min-height: 668px;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(2, max-content);
`
const Wrapper = styled.div`
  background-color: #fff;
  width: 760px;
  max-height: max-content;
  min-height: 668px;
  margin: 0;
  display: grid;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  padding-bottom: 44px;
  padding-left: 0;
  padding-right: 0;
  padding-top: 41px;
`
const BlogText = styled.div`
  width: 670px;
  max-height: max-content;
  min-height: 448px;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 145%;
`
const BlogInfo = styled.div`
  width: 100%;
  height: 220px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: end;
  padding: 0;
`
const BlogImage = styled.div`
  background-color: #fff;
  width: 241px;
  height: 194px;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
`
const Blog = ({ data }) => {
  return (
    <Wrapper>
      <Inner>
        <BlogText>{renderRichText(data.body, {})}</BlogText>
        <BlogInfo>
          <BlogImage>
            <Image banner={data.banner} />
          </BlogImage>
          <MetaData data={data} />
        </BlogInfo>
      </Inner>
      {/* <SEO title="Home" /> */}
    </Wrapper>
  )
}

Blog.propTypes = {
  BlogText: PropTypes.node.isRequired,
  MetaData: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

Blog.defaultProps = {
  BlogText: ``,
  MetaData: ``,
  data: {},
}

export default Blog
