import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const tagColors = {
  Fire: "ORANGERED",
  Poison: "DARKMAGENTA",
  Grass: "YELLOWGREEN",
  Water: "SKYBLUE",
  Flying: "MEDIUMSLATEBLUE",
  Bug: "OLIVE",
  Electric: "GOLD",
  Psychic: "VIOLET",
  Rock: "SLATEGRAY",
  Ground: "SIENNA",
  Ghost: "BLACK",
  Fighting: "LIGHTSALMON",
  Normal: "TAN",
  Ice: "DARKTURQUOISE",
  Dragon: "ROSYBROWN"
};

const Tag = styled.span`
  display: inline-block
  padding: 1px 4px
  margin: 0 4px 2px 0
  font-size: .7em
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
