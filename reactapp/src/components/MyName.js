import React from 'react';
import '../style.css';

const MyName = (props) => {
    const name = props.name
    return(
        <h1 className="title">This is not Spam, this is my name {name}</h1>
    )
}

export default MyName;