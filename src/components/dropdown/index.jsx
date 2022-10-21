import React from 'react';
import {Dropdown as AntDropdown} from 'antd';

import './index.scss'


const Dropdown = ({
  overlay, // The dropdown menu, type: Menu | () => Menu, default -
  overlayClassName, // The class name of the dropdown root element, type: string, default: -
  overlayStyle, // The style of the dropdown root element, type: CSSProperties, default -
  child, // element
  disabled, // Whether the dropdown menu is disabled, boolean, default: -
  arrow = false, //	Whether the dropdown arrow should be visible, type: boolean | { pointAtCenter: boolean }, default: false
  placement = "bottom", // Placement of popup menu: bottom bottomLeft bottomRight top topLeft topRight, type: string, default: bottomLeft
  trigger = ['hover'], // The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens, type: Array<click|hover|contextMenu>, defualt: [hover]
  open, // Whether the dropdown menu is currently open, type: boolean, default -,  Use visible under 4.23.0
  onOpenChange, // 	Called when the open state is changed. Not trigger when hidden by click item, type: (open: boolean) => void, default: -, Use onVisibleChange under 4.23.0
  autoFocus = false, // Focus element in overlay when opened, type: boolean, default: false
  destroyPopupOnHide = false, // Whether destroy dropdown when hidden, type: boolean, default: false
}) => {
  return (
    <div>
      <AntDropdown
        overlay={overlay}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}
        disabled={disabled}
        arrow={arrow}
        placement={placement}
        trigger={trigger}
        open={open}
        onOpenChange={onOpenChange}
        autoFocus={autoFocus}
        destroyPopupOnHide={destroyPopupOnHide}
      >
        <div>{child}</div>
      </AntDropdown>
    </div>
  );
};

export default Dropdown;
