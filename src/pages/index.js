import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import TemplatePost from "../templates/templatePost/templatePost"
import SEO from "../components/seo"

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
  return (
    <Layout>
      <SEO title="Home" />
      <TemplatePost data={content} />
    </Layout>
  )
}

IndexPage.propTypes = {
  TemplatePost: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
}

IndexPage.defaultProps = {
  TemplatePost: ``,
  data: {},
  content: {},
}

export default IndexPage
