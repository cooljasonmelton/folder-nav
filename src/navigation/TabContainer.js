import React, { useState } from 'react';
import { lookUpImage } from '../images/index'

// styling
import './TabContainer.css';

// components
import Tab from './Tab';
import DisplayContainer from './DisplayContainer';

const TabContainer = () => {
  const [active, setActive] = useState('dog')

  const tabNames = [
    "dog",
    "cat",
    "bat",
    "chicken"
  ]

  const renderTabs = tabNames.map(name => {
    return (
      <Tab name={name}
        active={active} 
        setActive={() => setActive(name)}/>
    )
  })

  return (
    <div className="TabContainer">
      <div className="tabs-div">
        {renderTabs}
      </div>
      <DisplayContainer imgSrc={lookUpImage[active]} active={active}/>
    </div>
  );
}

export default TabContainer;
