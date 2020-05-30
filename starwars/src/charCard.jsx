import React from 'react'
import  styled from 'styled-components'

const CharCard = (props) => {
    const Box = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 275px;
        height: 200px;
        background:
linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, #ededed 75%, #ededed) 0 0,
linear-gradient(-45deg, #ededed 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em,
linear-gradient(45deg, #ededed 17%, transparent 17%, transparent 25%, #ededed 25%, #ededed 36%, transparent 36%, transparent 64%, #ededed 64%, #ededed 75%, transparent 75%, transparent 83%, #ededed 83%) 1em 1em;
background-color: white;
background-size: 2em 2em;
        border: 1px solid black;
        border-radius: 10px;
        padding: 0px;
        margin: 10px;
        cursor: pointer;
        &:hover { transform:scale(1.01)};
    `
    const Name = styled.h1 `
        text-align: center;
        font-family: 'Comic Sans MS';
        color: black;
    `
    const Para = styled.p `
        font-size: 14px;
        text-align: center;
        margin: 0px;
        padding: 0px;
        color: black;
    `
    return(
        <Box>
            <Name>{props.name}</Name>
            <Para>Weight: {props.height}</Para>
            {/* <Para>Comes from: <a href={props.home}>HOME!!</a></Para> */}
            <Para>Skin Color: {props.skin}</Para>
            <Para>Eye Color: {props.eye}</Para>
        </Box>
    );
}

export default CharCard;