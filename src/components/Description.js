import React from 'react';

export default function Description (props) {
    const {explanation} = props;

    return(
        <div className="photoDesciption">
            <p>{explanation}</p>
        </div>
    )
}