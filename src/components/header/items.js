import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LinkItem = styled(Link)`
  color: #000;
  font-weight: normal;
  font-size: 22px;
  line-height: 136%;
  font-style: normal;
  text-decoration: none;
`
const Ul = styled.ul`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(4, max-content);
  height: 32px;
  width: 413px;
  list-style: none;
  margin: 0;
  li {
    list-style-type: none;
    width: 71px;
    height: 30px;
    padding: 0;
    margin: 0;
  }
`
const Items = () => {
  return (
    <Ul>
      <li>
        <LinkItem to="/">Item 1</LinkItem>
      </li>
      <li>
        <LinkItem to="/">Item 2</LinkItem>
      </li>
      <li>
        <LinkItem to="/">Item 3</LinkItem>
      </li>
      <li>
        <LinkItem to="/">Item 4</LinkItem>
      </li>
    </Ul>
  )
}

Items.propTypes = {
  LinkItem: PropTypes.string.isRequired,
}

Items.defaultProps = {
  LinkItem: ``,
}

export default Items
