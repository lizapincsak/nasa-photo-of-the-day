import React from 'react';

export default function Header (props) {
    const { photoTitle } = props;

    return (
    <h2>{photoTitle}</h2>
    )
}