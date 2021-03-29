import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";

const Wrapper = styled.div`
  padding: 20px 15% 20px 15%;
  background-color: ${theme.bgColor};
  display: flex;
  align-items: center;
`;
const TextCovid = styled.h1``;
const TextAn = styled.span``;
const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <TextCovid>Covid-19</TextCovid>
      </Link>
      <Link to="/">
        <TextAn>Kr</TextAn>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
