import React from 'react';
import './TabContainer.css';

const Tab = props => {
  const {name, active, setActive} = props

  const setClass = () => {
    const classArr = ["Tab", "cfb"]
    if (active === name) classArr.push('active-tab')
    return classArr.join(' ')
  }

  return (
    <div className={setClass()} onClick={setActive}>
      {name}
    </div>
  );
}

export default Tab;
