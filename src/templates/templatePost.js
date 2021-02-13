import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import styled from "styled-components"
// import SEO from "../components/seo"
import { renderRichText } from "gatsby-source-contentful/rich-text"
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
const Inner = styled.div`
  width: 670px;
  max-height: max-content;
  min-height: 668px;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(2, max-content);
`
const Blog = styled.div`
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
const BlogMetaData = styled.div`
  max-width: 379px;
  min-width: 198px;
  height: 70px;
  display: grid;
  grid-template-rows: repeat(2, 30px);
  padding: 0;
  margin-left: 0;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 7px;
  align-content: space-between;
`
const MetaDataText = styled.div`
  padding: 0;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
`
const MetaDataTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  line-height: 136%
  font-size: 22px;
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
const PostTitle = styled.div`
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
const TitleText = styled.div`
  padding: 0;
  color: #000;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 138%;
  margin-block-start: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TemplatePost = ({ data }) => {
  return (
    <Content>
      <PostTitle>
        <Img>
          <Image banner={data.banner} />
        </Img>
        <Title>
          <TitleText>{data.title}</TitleText>
        </Title>
      </PostTitle>
      <Blog>
        <Inner>
          <BlogText>{renderRichText(data.body, {})}</BlogText>
          <BlogInfo>
            <BlogImage>
              <Image banner={data.banner} />
            </BlogImage>
            <BlogMetaData>
              <MetaDataText>
                <MetaDataTitle>Author:&nbsp; </MetaDataTitle> {data.author}
              </MetaDataText>
              <MetaDataText>
                <MetaDataTitle>Date:&nbsp; </MetaDataTitle> {data.date}
              </MetaDataText>
            </BlogMetaData>
          </BlogInfo>
        </Inner>
      </Blog>
      {/* <SEO title="Home" /> */}
    </Content>
  )
}
export default TemplatePost
