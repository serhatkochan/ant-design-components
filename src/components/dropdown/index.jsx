import React from 'react';
import {Dropdown as AntDropdown} from 'antd';

import './index.scss'


const Dropdown = ({
  menu,
  text
}) => {
  return (
    <div>
      <AntDropdown overlay={menu}>
        <div>{text}</div>
      </AntDropdown>
    </div>
  );
};

export default Dropdown;
