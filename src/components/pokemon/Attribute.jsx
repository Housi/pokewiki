import React from "react";
import { string, node } from "prop-types";
import styled from "styled-components";

const Box = styled.div`
  padding: 4px 8px;
`;
const Value = styled.div`
  font-family: "Azonix";
  font-size: .8em
  letter-spacing: -1px
`;

const Title = styled.div`
  font-size:.7em
  text-transform: uppercase
  line-height: .9em
`;

const Attribute = ({ title, value }) => {
  return (
    <Box>
      <Value>{value}</Value>
      <Title>{title}</Title>
    </Box>
  );
};

Attribute.propTypes = {
  title: string,
  value: node
};

Attribute.defaultProps = {
  title: "",
  value: ""
};

export default Attribute;
