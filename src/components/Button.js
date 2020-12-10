import React from "react";
import styled from "styled-components";

export default function Button (props) {
    return (
        <ButtonStyle>
        <button onClick={(e)=> {e.preventDefault(); window.location.href='https://api.nasa.gov/#apod'}}>Learn More</button>
        </ButtonStyle>
    )

}

const ButtonStyle = styled.div`
    button {
        cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    border: 2px solid ${(pr) => pr.theme.black};
    margin: 0 1em;
    padding: 0.25em 1em;
    color: ${(pr) => pr.theme.tertiaryColor};

    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
    
`;
