import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  height: 25px;
`
const LogInLink = styled(Link)`
  color: #000;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
`
const LogIn = () => {
  return (
    <Wrapper>
      <LogInLink to="/">Log in/Sign up</LogInLink>
    </Wrapper>
  )
}

LogIn.propTypes = {
  LogInLink: PropTypes.string.isRequired,
}

LogIn.defaultProps = {
  LogInLink: ``,
}

export default LogIn
