import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../state/count.slice";

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return(
        <CounterElemnt onClick={() => dispatch(increment())}>
            Player 1 <br></br>
            Score: {count}
        </CounterElemnt>
    );
};
export default Counter;

const CounterElemnt = styled.h2`
    font-size: calc(2px + 2vmin);
`;
