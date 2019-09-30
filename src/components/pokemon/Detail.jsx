/* eslint-disable react/forbid-prop-types, camelcase */
import React from "react";
import { object } from "prop-types";
import styled from "styled-components";
import ElementList from "./ElementList";
import Candy from "./CandyIcon";
import Attribute from "./Attribute";
import { Background } from "./Background";

const Title = styled.div`
  font-family: "Azonix";
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px
  text-shadow: white 0px 0px 12px;
`;

const ThumbImage = styled.img`
  width: 40px
  height: 40px
  margin-right: 6px
`;

const Section = styled.div`
  width: 100%;
  text-align: left
  text-shadow: white 0px 0px 8px;
`;

const GridSection = styled(Section)`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 1%;
  margin-bottom: 8px;
`;

const Detail = ({ pokemon }) => {
  const {
    name,
    img,
    type,
    height,
    weight,
    egg,
    candy,
    spawn_chance,
    avg_spawns,
    spawn_time,
    weaknesses
  } = pokemon;
  const eggDisplay = () => (egg === "Not in Eggs" ? "-" : egg);
  const candyDisplay = () => {
    if (candy === "None") {
      return <Attribute title="candy" value="none" />;
    }
    return <Attribute title={candy} value={<Candy name={candy} />} />;
  };

  return (
    <Background type={type}>
      <Title>
        <ThumbImage src={img} alt="{name}" />
        {name}
      </Title>
      <GridSection>
        <Attribute title="weight" value={weight} />
        <Attribute title="height" value={height} />
        <Attribute title="spawn chance" value={spawn_chance} />
        <Attribute title="spawn time" value={spawn_time} />
        <Attribute title="average spawns" value={avg_spawns} />
        <Attribute title="egg" value={eggDisplay()} />
        {candyDisplay()}
      </GridSection>
      <Section>
        <Attribute
          title="weaknesses"
          value={<ElementList elements={weaknesses} />}
        />
      </Section>
    </Background>
  );
};

Detail.propTypes = {
  pokemon: object.isRequired
};

export default Detail;
