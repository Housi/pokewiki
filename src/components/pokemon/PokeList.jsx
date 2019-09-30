import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Detail from "./Detail";
import Overview from "./Overview";
import FlipCard from "../FlipCard";

const Container = styled.div`
  display: flex
  width: 100%
  max-width: 960px
  justify-content: center
  margin: 0 auto
  padding-top: 2em
  flex-wrap: wrap
`;

function PokeList({ pokemons }) {
  return (
    <Container>
      {pokemons.map(pokemon => {
        const { id, name, img, num, type } = pokemon;
        return (
          <FlipCard
            key={id}
            front={<Overview num={num} name={name} img={img} type={type} />}
            back={<Detail pokemon={pokemon} />}
          />
        );
      })}
    </Container>
  );
}

PokeList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
};

PokeList.defaultProps = {
  pokemons: []
};

export default PokeList;
