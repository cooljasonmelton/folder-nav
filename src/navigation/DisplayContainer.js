import React from 'react';
import './TabContainer.css';

const DisplayContainer = props => {
    const { imgSrc, active } = props

    return (
        <div className="DisplayContainer">
            <hr className="display-top" />
            <div className="display-img-div cfb">
                <h1>{active}</h1>
                <img className="display-img" 
                    src={imgSrc} 
                    alt={active}/> 
            </div>
        </div>
    );
}

export default DisplayContainer;