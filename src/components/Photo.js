import React from 'react';

export default function Photo(props){
    const { photoURL } = props;

    return(
        <div>
        <img src={photoURL} alt="daily"/>
        </div>
    )

}