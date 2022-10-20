import React from 'react';
import {Dropdown as AntDropdown} from 'antd';

import './index.scss'


const Dropdown = ({
  menu,
  text,
  arrow = false, // bool || { pointAtCenter: boolean }
  placement = "bottom", // bottomLeft, bottomRight, top, topLeft, topRight
  trigger = ['hover'] // click, contextMenu
}) => {
  return (
    <div>
      <AntDropdown
        overlay={menu}
        arrow={arrow}
        placement={placement}
        trigger={trigger}
      >
        <div>{text}</div>
      </AntDropdown>
    </div>
  );
};

export default Dropdown;
