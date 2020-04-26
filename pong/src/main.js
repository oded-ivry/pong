import React from 'react';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";

const Main = () => {
  let history = useHistory();

  window.addEventListener("keydown", event => {
    if(event.keyCode === 27){
       history.push("/");
    }
  });

  return(
    <Page>
      <Title>Main Menu</Title>
      <Menu>
        <MenuItem>
          <StyledLink to="/play">Play</StyledLink> 
        </MenuItem>
        <MenuItem>
          <StyledLink to="/scroeBoard">ScroeBoard</StyledLink>
        </MenuItem>
      </Menu>
    </Page>
  );
};
export default Main;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Menu = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
padding:50px;
`;
const StyledLink = styled(Link)`
color: mintcream;
text-decoration: none;
`;
const MenuItem = styled.li`
display: list-item;
flex-basis: 1;
list-style-type: none;
margin: 0 0 60px 0;
padding: 3px;

&:hover {
  font-size: calc(20px + 2vmin);;
}
`;
const Title = styled.h1`
  font-size: calc(5px + 2vmin);
`

