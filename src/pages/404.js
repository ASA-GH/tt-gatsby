import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
  </Layout>
)
NotFoundPage.propTypes = {
  h1: PropTypes.string.isRequired,
}

NotFoundPage.defaultProps = {
  h1: ``,
}

export default NotFoundPage
