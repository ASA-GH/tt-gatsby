import React from "react"
import styled from "styled-components"
import Items from "./items"
import Logo from "./Logo"
import LogIn from "./LogIn"

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: grid;
  justify-items: center;
  background-color: #fff;
`
const Ul = styled.ul`
  width: 1160px;
  height: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
  align-items: center;
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`
const Header = () => {
  return (
    <Wrapper>
      <Ul>
        <li>
          <Logo />
        </li>
        <li>
          <Items />
        </li>
        <li>
          <LogIn />
        </li>
      </Ul>
    </Wrapper>
  )
}
export default Header
