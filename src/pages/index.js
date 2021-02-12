import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"
// import SEO from "../components/seo"
const Content = styled.div`
  width: 1160px;
  max-height: max-content;
  min-height: 753px;
  margin: 0 auto;
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
  width: 100%;
  max-height: max-content;
  min-height: 448px;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  Line height: 107%
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
  background-color: #fff;
  max-width: 379px;
  min-width: 198px;
  height: 70px;
  margin: 0;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  padding: 0;
  margin-left: 0;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 7px;
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
  margin-block-start: 0;
  margin-block-end: 0.5em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const IndexPage = () => (
  <Layout>
    <Content>
      <PostTitle>
        <Img>
          <Image />
        </Img>
        <Title>
          <TitleText>Post Title</TitleText>
        </Title>
      </PostTitle>
      <Blog>
        <Inner>
          <BlogText>
          Where does it come from?<br/>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in<br/>section 1.10.32.
          </BlogText>
          <BlogInfo>
            <BlogImage><Image /></BlogImage>
            <BlogMetaData>
              <MetaDataText>
                <MetaDataTitle>Author:&nbsp; </MetaDataTitle> Jonh Smith
              </MetaDataText>
              <MetaDataText>
                <MetaDataTitle>Date:&nbsp; </MetaDataTitle> 02.02.2021
              </MetaDataText>
            </BlogMetaData>
          </BlogInfo>
        </Inner>
      </Blog>
      {/* <SEO title="Home" /> */}
    </Content>
  </Layout>
)

export default IndexPage
{
  /* <h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div >
  <Image />
</div>
</Layout> */
}
