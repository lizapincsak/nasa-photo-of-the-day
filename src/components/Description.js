import React from 'react';
import styled from 'styled-components';

export default function Description (props) {
    const {explanation} = props;

    return(
        <ParagraphContainer className="photoDesciption">
            <p>{explanation}</p>
        </ParagraphContainer>
    )
}

const ParagraphContainer = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    padding: 4%;

    &:hover {
    color: ${(pr) => pr.theme.white};
    background-color: ${(pr) => pr.theme.secondaryColor};
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`;