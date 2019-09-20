import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ElementList from "./ElementList";

const Container = styled.div`
  display: flex
  width: 100%
  max-width: 1024px
  margin: 0 auto
  flex-wrap: wrap
`;
const Item = styled.div`
  display: flex
  flex-direction: column
  width: 25%
  box-sizing: border-box
  padding: 6px
  border-radius: 3px
  text-align: center
`;

const Title = styled.p`
  font-weight: 600
  margin-bottom: 0
`;
const Box = styled.div`
  flex: 1
  box-sizing: border-box
  border: 2px solid #eee
  padding: 10px
`;

function PokeList({ pokemons }) {
  return (
    <Container>
      {pokemons.map(pokemon => {
        const { id, name, img, num, type } = pokemon;
        return (
          <Item key={id}>
            <Box>
              <img src={img} alt="{name}" />
              <Title>{`#${num} ${name}`}</Title>
              <ElementList elements={type} />
            </Box>
          </Item>
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
