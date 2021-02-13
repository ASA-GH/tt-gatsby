import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 213px;
  display: grid;
  background-color: #fff;
  justify-items: center;
  align-items: center;
`
const Inner = styled.div`
  padding: 0;
  width: 695px;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
`
const MenuFirst = styled.div`
  width: 80px;
  height: 30px;
  padding: 0;
  color: #000;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 136%;
`
const Menu = styled.div`
  width: 80px;
  height: 30px;
  padding: 0;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 136%;
`
const Menus = styled.div`
  margin: 0;
  display: grid;
  width: max-content;
  height: 141px;
  grid-template-row: repeat(4, max-content);
  padding: 0;
`

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Menus>
          <MenuFirst>Menu 1</MenuFirst>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
        </Menus>
        <Menus>
          <MenuFirst>Menu 1</MenuFirst>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
        </Menus>
        <Menus>
          <MenuFirst>Menu 1</MenuFirst>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
        </Menus>
        <Menus>
          <MenuFirst>Menu 1</MenuFirst>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
          <Menu>Menu 1</Menu>
        </Menus>
      </Inner>
    </Wrapper>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
