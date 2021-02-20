import React from 'react';
import styled from 'styled-components';

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    background-color: ${pr => pr.theme.primaryColor};
    transition: 0.5s all ease-in;
    width: 100%;
`;

const Img = styled.img`
    width: 40%;
    padding: 4%;
    
`;
export default function Photo(props){
    const { photoURL } = props;

    return(
        <PhotoWrapper>
        <Img src={photoURL} alt="daily"/>
        </PhotoWrapper>
    )

}