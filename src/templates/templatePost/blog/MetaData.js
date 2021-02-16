import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// import SEO from "../components/seo"

const Ul = styled.ul`
  max-width: 379px;
  min-width: 198px;
  height: 70px;
  display: grid;
  grid-template-rows: repeat(2, 30px);
  align-content: space-between;
  padding: 0;
  margin: 0 5px 7px 0;
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #000;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    display: grid;
    grid-template-columns: repeat(2, max-content);
  }
`
const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  line-height: 136%
  font-size: 22px;
`
const MetaData = ({ data }) => {
  return (
    <Ul>
      <li>
        <Title>Author:&nbsp; </Title> {data.author}
      </li>
      <li>
        <Title>Date:&nbsp; </Title> {data.date}
      </li>
    </Ul>
  )
}

MetaData.propTypes = {
  Title: PropTypes.string.isRequired,
  li: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

MetaData.defaultProps = {
  Title: ``,
  li: ``,
  data: {},
}

export default MetaData
