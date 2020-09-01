import React, { useState } from 'react';

// styling
import './TabContainer.css';

// components
import Tab from './Tab';

const TabContainer = () => {
  const [active, setActive] = useState('')

  const tabNames = [
    "dog",
    "cat",
    "bat",
    "chicken"
  ]

  const renderTabs = tabNames.map(name => {
    return <Tab active={active} name={name}/>
  })

  return (
    <div className="TabContainer">
      {renderTabs}

    </div>
  );
}

export default TabContainer;
