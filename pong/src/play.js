import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Play = () => {
    return (
      <Menu>
        <MenuItem>
            <StyledLink to="/single">Single Player</StyledLink> 
        </MenuItem>
        <MenuItem>
            <StyledLink to="/multi">Multi Player</StyledLink>
        </MenuItem>
        <MenuItem>
            <StyledLink to="/online">Online</StyledLink>
        </MenuItem>
        <MenuItem>
            <StyledLink to="/main">Back</StyledLink>
        </MenuItem>
      </Menu>
    );
}
export default Play;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  justify-content: center;
  // border: solid 2px red;
  text-align: center;
  padding:50px;
`;
const StyledLink = styled(Link)`
  color: mintcream;
  text-decoration: none;
`;
const MenuItem = styled.li`
  display: list-item;
  // border: solid 2px blue;
  flex-basis: 1;
  list-style-type: none;
  margin: 0 0 60px 0;
  padding: 3px;

  &:hover {
    font-size: calc(20px + 2vmin);;
  }
`;