import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function ScroeBoard() {
    return (
        <Page>
            <Title>ScroeBoard</Title>
            <StyledLink to="/main">Back</StyledLink>
        </Page>
    );
  }
export default ScroeBoard;

const Title = styled.h1`
  font-size: calc(5px + 2vmin);
  padding: 30px;
`
const StyledLink = styled(Link)`
  color: mintcream;
  text-decoration: none;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

