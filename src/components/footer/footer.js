import React from "react"
import styled from "styled-components"
import Menus from "./menus"

const Wrapper = styled.div`
  width: 100%;
  height: 213px;
  display: grid;
  background-color: #fff;
  justify-items: center;
  align-items: center;
`
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  width: 695px;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`
const Footer = () => {
  return (
    <Wrapper>
      <Ul>
        <li>
          <Menus />
        </li>
        <li>
          <Menus />
        </li>
        <li>
          <Menus />
        </li>
        <li>
          <Menus />
        </li>
      </Ul>
    </Wrapper>
  )
}

export default Footer
