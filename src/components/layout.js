/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

import styled from "styled-components"
// error
const Container = styled.div`
font-family: 'Open Sans', Arial, sans-serif;
  background-color: #e5e5e5;
  max-width: 1365px;
  min-width: max-content;
  max-height: max-content;
  min-height: 1249px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-rows: max-content 1fr;
  justify-items: center;
`
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr max-content;
  background-color: #E5E5E5;
  ;
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`


const Layout = ({ children }) => {

  return (
    <Container>
      <Header />
      <Wrapper>
        <Inner>
          <main>{children}</main>
        </Inner>
        <Footer />
      </Wrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
