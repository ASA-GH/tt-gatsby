import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import TemplatePost from "../templates/templatePost"

// import SEO from "../components/seo"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulMyPost {
      nodes {
        author
        date(formatString: "DD.MM.YYYY")
        title
        body {
          raw
        }
        banner {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`)
const content = data.allContentfulMyPost.nodes[0]
  return(
  <Layout>
    <TemplatePost data={content}/>
  </Layout>
)}

export default IndexPage
