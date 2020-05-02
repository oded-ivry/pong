import React from 'react';
import styled from 'styled-components';

const Counter = (props) => {
    
    return(
        <CounterElemnt>
            {props.name}
            <br></br>
            Points: {props.count}
        </CounterElemnt>
    );
};
export default Counter;

const CounterElemnt = styled.h2`
    font-size: calc(3px + 1.5vmin);
    // display: flex;
    // border: solid deepPink 3px;
`;
