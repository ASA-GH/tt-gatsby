import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 43px;
  width: 143px;
  border-radius: 21.5px;
  background-color: #2d5b8f;
`
const LogoLink = styled(Link)`
  width: 55px;
  height: 33px;
  padding: 0;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 138%;
  font-style: normal;
  text-decoration: none;
`
const Logo = () => {
  return (
    <Wrapper to="/">
      <LogoLink to="/">Logo</LogoLink>
    </Wrapper>
  )
}

Logo.propTypes = {
  LogoLink: PropTypes.string.isRequired,
}

Logo.defaultProps = {
  LogoLink: ``,
}

export default Logo
