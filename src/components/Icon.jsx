import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const defs = {
  fastforward:
    "M11.461 38.836l-2.672-2.672 12.188-12.164-12.188-12.164 2.672-2.672 14.813 14.836zM25.688 38.836l-2.648-2.672 12.188-12.164-12.188-12.164 2.648-2.672 14.836 14.836z",
  rewind:
    "M36.539 38.836l-14.813-14.836 14.813-14.836 2.672 2.672-12.188 12.164 12.188 12.164zM22.313 38.836l-14.836-14.836 14.836-14.836 2.648 2.672-12.188 12.164 12.188 12.164z",
  right:
    "M19.336 40.594l-2.672-2.648 14.18-14.18-14.18-14.18 2.672-2.648 16.828 16.828z",
  left:
    "M29.414 40.594l-16.828-16.828 16.828-16.828 2.648 2.648-14.18 14.18 14.18 14.18z"
};

const Symbol = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  margin-bottom: -2px;
`;

function Icon({ name }) {
  return (
    <Symbol viewBox="0 0 48 48" preserveAspectRatio="xMidYMid slice">
      <title>{name}</title>
      <path d={defs[name]} />
    </Symbol>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
