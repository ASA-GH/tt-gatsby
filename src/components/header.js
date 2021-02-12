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
  width: max-content;
  height: max-content;
  padding: 0;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
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
const Logoin = styled.div`
  width: max-content;
  height: max-content;
  padding: 0;
  color: #000;
  font-weight: normal;
  font-size: 18px;
  text-transform: uppercase;
`
const Item = styled.li`
  width: max-content;
  height: max-content;
  padding: 0;
  color: #000;
  font-weight: normal;
  font-size: 22px;
  list-style: none;
`
const Items = styled.ul`
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
        <Logoin>log in/sign up</Logoin>
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
