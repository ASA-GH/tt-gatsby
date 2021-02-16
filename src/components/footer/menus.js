import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LinkMenuFirst = styled(Link)`
  padding: 0;
  margin: 0;
  color: #000;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 136%;
  text-decoration: none;
`
const LinkMenu = styled(Link)`
  padding: 0;
  margin: 0;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 136%;
  text-decoration: none;
`
const Ul = styled.ul`
  display: grid;
  grid-template-row: repeat(4, max-content);
  width: max-content;
  height: 141px;
  padding: 0;
  margin: 0;
  li {
    list-style-type: none;
    width: 80px;
    height: 30px;
    padding: 0;
    margin: 0;
  }
`
const Menus = () => {
  return (
    <Ul>
      <li>
        <LinkMenuFirst to="/">Menu 1</LinkMenuFirst>
      </li>
      <li>
        <LinkMenu to="/">Menu 1</LinkMenu>
      </li>
      <li>
        <LinkMenu to="/">Menu 1</LinkMenu>
      </li>
      <li>
        <LinkMenu to="/">Menu 1</LinkMenu>
      </li>
    </Ul>
  )
}

Menus.propTypes = {
  LinkMenuFirst: PropTypes.string.isRequired,
  LinkMenu: PropTypes.string.isRequired,
}

Menus.defaultProps = {
  LinkMenuFirst: ``,
  LinkMenu: ``,
}

export default Menus
