import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";

const Wrapper = styled.div`
  background-color: ${theme.bgColor};
`;

const Navigation = styled.nav`
  padding: 20px 15% 20px 15%;
  background-color: ${theme.bgColor};
  display: flex;
  align-items: flex-end;
`;

const TextCovid = styled.h1`
  font-size: 50px;
  font-weight: 800;
  color: white;
`;
const TextAn = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: white;
  padding-left: 30px;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <Navigation>
        <Link to="/">
          <TextCovid>Covid-19</TextCovid>
        </Link>
        <Link to="/">
          <TextAn>확진자현황</TextAn>
        </Link>
        <Link to="/table">
          <TextAn>코로나백신센터</TextAn>
        </Link>
      </Navigation>
    </Wrapper>
  );
};

export default Navbar;
