import React from 'react';
import styled from 'styled-components';
import {Link}  from "react-router-dom";

function Online() {
    return (
        <Page>
            <Title>Online</Title>
            <StyledLink to="/play">Back</StyledLink>
        </Page>
    );
  }
export default Online;

const Title = styled.h1`
  font-size: calc(5px + 2vmin);
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

