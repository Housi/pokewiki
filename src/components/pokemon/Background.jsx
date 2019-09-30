import styled from "styled-components";
import { shade } from "polished";

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

const BgGradient = type => {
  const color1 = tagColors[type[0]];
  const color2 = type.length > 1 ? tagColors[type[1]] : shade(0.5, color1);
  return `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`;
};

const Background = styled.div`
  height: 100%
  padding: 10px
  box-sizing: border-box
  display: flex
  flex-direction: column
  align-items: center
  justify-items: center
  background: ${props => BgGradient(props.type)}
  `;

export { tagColors, BgGradient, Background };
