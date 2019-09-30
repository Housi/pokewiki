import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { tagColors } from "./Background";

const Tag = styled.span`
  display: inline-block
  padding: 1px 4px
  margin: 0 4px 4px 0
  font-family: 'silkaregular', sans-serif;
  letter-spacing: normal
  text-shadow: none
  font-size: .9em
  font-weight: 600
  color: white
  border-radius: 3px
  background-color: ${props => tagColors[props.type]}
`;

function ElementList({ elements }) {
  return elements.map(name => (
    <Tag key={name} type={name}>
      {name}
    </Tag>
  ));
}

ElementList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string)
};

ElementList.defaultProps = {
  elements: []
};

export default ElementList;
