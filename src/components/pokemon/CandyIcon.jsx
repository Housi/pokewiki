import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

const Candy = styled.div`
  display: flex;
`;

const Amount = styled.div`
  margin-top: auto
  margin-bottom: 2px;
`;
const Image = styled.img`
  margin-left: -4px
  margin-top: -10px
`;

const CandyIcon = ({ name, amount }) => {
  const spriteName = name.toLowerCase().replace(" ", "");
  const spriteUrl = `https://www.serebii.net/itemdex/sprites/${spriteName}.png`;
  return (
    <Candy>
      <Image src={spriteUrl} alt={name} />
      <Amount>{amount}</Amount>
    </Candy>
  );
};

CandyIcon.propTypes = {
  name: string,
  amount: string
};

CandyIcon.defaultProps = {
  name: "",
  amount: "0"
};

export default CandyIcon;
