import React from 'react';
import styled from 'styled-components';

export default function Header (props) {
    const { photoTitle } = props;

    return (
    <SubHeader>{photoTitle}</SubHeader>
    )
}

const SubHeader = styled.h2`
    font-size: 1.5em;
    font-family: 'DM Serif Text', serif;
`;