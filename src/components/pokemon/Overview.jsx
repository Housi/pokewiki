import React from "react";
import { string, arrayOf } from "prop-types";
import styled from "styled-components";
import ElementList from "./ElementList";
import { Background } from "./Background";
import distortFilter from "../../assets/distortFilter.svg";

const Title = styled.p`
  font-family: "Azonix";
  background-color: #fff
  opacity: .9
  width: 100%;
  padding: 4px;
  text-align: center;
  transform: rotate(5deg);
  margin-bottom: 22px;
  letter-spacing: -1px;
`;

const ImageBox = styled.div`
  margin-top: 15px;
  position: relative
  height: 120px
  width: 120px
`;
const ImageBg = styled.div`
  position: absolute
  top: 5px
  left:5px
  height: 110px
  width: 110px
  background-image:
    radial-gradient(
      
      rgba(255,255,255,.0),
      rgba(0,0,0,.5)
    );
  border-radius:90px
  filter: url(${distortFilter}#f1)
`;
const Image = styled.img`
  position: absolute
  top: 0
  left:0
  height: 120px
  width: 120px
  backface-visibility: hidden
`;

const Overview = ({ num, name, img, type }) => {
  return (
    <Background type={type}>
      <ImageBox>
        <ImageBg />
        <Image src={img} alt="{name}" />
      </ImageBox>
      <Title>{`#${num} ${name}`}</Title>
      <ElementList elements={type} />
    </Background>
  );
};

Overview.propTypes = {
  num: string,
  name: string,
  img: string,
  type: arrayOf(string)
};

Overview.defaultProps = {
  num: "000",
  name: "Err",
  img: "",
  type: []
};

export default Overview;
