import React, { useState } from 'react';

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
      <DisplayContainer/>
    </div>
  );
}

export default TabContainer;
