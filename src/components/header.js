import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: grid;
  justify-items: center;

  background-color: #fff;
`
const Inner = styled.div`
  width: 1160px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
  align-items: center;
`

const LogoText = styled.div`
  width: 55px;
  height: 33px;
  padding: 0;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 138%;
  font-style: normal;
`
const Logo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 43px;
  width: 143px;
  border-radius: 21.5px;
  background-color: #2d5b8f;
`
const Login = styled.div`
  width: max-content;
  height: 25px;
  padding: 0;
  color: #000;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  margin: 0;
  font-style: normal;
  text-transform: uppercase;
`
const Item = styled.div`
  width: 71px;
  height: 30px;
  padding: 0;
  color: #000;
  font-weight: normal;
  font-size: 22px;
  line-height: 136%;
  font-style: normal;
`
const Items = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  width: 413px;
  grid-template-columns: repeat(4, max-content);
`

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo>
          <LogoText>Logo</LogoText>
        </Logo>
        <Items>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
        </Items>
        <Login>Log in/Sign up</Login>
      </Inner>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
