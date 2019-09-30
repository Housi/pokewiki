import React, { useState } from "react";
import { node } from "prop-types";
import styled from "styled-components";

const AbsBox = styled.div`
  position: absolute
  top: 0
  left: 0
  width:100%
  height:100%
  border-radius: 12px
`;
const CardWrapper = styled.div`
  position: relative
  width: 200px
  height: 260px
  padding: 10px
  margin: 6px
`;
const Card = styled(AbsBox)`
  transform-style: preserve-3d
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
            0 2px 2px rgba(0,0,0,0.20), 
            0 4px 4px rgba(0,0,0,0.15), 
            0 8px 8px rgba(0,0,0,0.10),
            0 16px 16px rgba(0,0,0,0.05);

  ${({ flipped }) =>
    flipped &&
    `
    transform: rotateY(180deg);
  `}
  &:hover {
    cursor: pointer
  }
`;
const CardFront = styled(AbsBox)`
  overflow: hidden
  backface-visibility: hidden

`;
const CardBack = styled(AbsBox)`
  transform: rotateY(180deg);
  backface-visibility: hidden
  overflow: hidden
`;

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <CardWrapper>
      <Card flipped={flipped} onClick={() => setFlipped(!flipped)}>
        <CardFront>{front}</CardFront>
        <CardBack>{back}</CardBack>
      </Card>
    </CardWrapper>
  );
};

FlipCard.propTypes = {
  front: node,
  back: node
};

FlipCard.defaultProps = {
  front: <div />,
  back: <div />
};

export default FlipCard;
