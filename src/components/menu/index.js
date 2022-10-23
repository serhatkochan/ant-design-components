import React from 'react';
import {Menu as AntMenu} from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import './index.scss';

const Menu = ({
  items, // Menu item content, Type: 	ItemType[], default -
  mode = 'vertical', // Type of menu, Type: vertical | horizontal | inline, default vertical
  onClick, // Called when a menu item is clicked, Type: function({ item, key, keyPath, domEvent }), default -
  onDeselect, // Called when a menu item is deselected (multiple mode only), Type: function({ item, key, keyPath, selectedKeys, domEvent }), default -
  onSelect, // Called when a menu item is selected, Type: function({ item, key, keyPath, selectedKeys, domEvent }), default -
  onOpenChange, // Called when sub-menus are opened or closed, Type: function(openKeys: string[]), defualt -
  theme = 'light', // Color theme of the menu, Type: light | dark, default light
  triggerSubMenuAction = 'hover', // Which action can trigger submenu open/close, Type: hover | click, default hover
  subMenuOpenDelay = 0, // Delay time to show submenu when mouse enters, (in seconds), Type: number, default 0
  subMenuCloseDelay = 0.1, // Delay time to hide submenu when mouse leaves (in seconds), Type: number, default 0
  style, //	Style of the root node, Type: CSSProperties, default -
  selectedKeys, // Array with the keys of currently selected menu items, Type: string[], default -
  selectable = true, // Allows selecting menu items, Type: boolean, default -
  overflowedIndicator = <EllipsisOutlined />, // Customized the ellipsis icon when menu is collapsed horizontally, type: ReactNode, default <EllipsisOutlined />
  openKeys, // 	Array with the keys of currently opened sub-menus, Type: string[], default -
  multiple = false, // 	Allows selection of multiple items, Type: boolean, default false
  inlineIndent = 24, // Indent (in pixels) of inline menu items on each level, Type: number, default 24
  inlineCollapsed, // 	Specifies the collapsed status when menu is inline mode, Type: boolean, default -
  forceSubMenuRender = false, // Render submenu into DOM before it becomes visible, Type: boolean, default false
  expandIcon, // 	custom expand icon of submenu, Type: ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode, default -
  defaultSelectedKeys, // Array with the keys of default selected menu items, Type: 	string[], default -
  defaultOpenKeys, // Array with the keys of default opened sub menus, Type: string[], default -

}) => {
  /*
  ------ Menu Item Type ------
  danger = false, // Display the danger style, Type: boolean, default false
  disabled = false, //	Whether menu item is disabled, Type:	boolean, default false
  icon,	The icon of the menu item, Type:	ReactNode, default	-
  key,	Unique ID of the menu item, Type:	string, default	-
  label,	Menu label, Type:	ReactNode, default	-
  title,	Set display title for collapsed item, Type:	string, default	-
   */
  /*
  ------ Sub Menu Item Type ------
  children,	// Sub-menus or sub-menu items, Type: ItemType[], default	-
  disabled,	// Whether sub-menu is disabled, Type: boolean, default	false
  icon,	// Icon of sub menu, Type: ReactNode, default	-
  key,	// Unique ID of the sub-menu, Type: string, default	-
  label,	// Menu label, Type: ReactNode, default	-
  popupClassName,	// Sub-menu class name, not working when mode="inline", Type: string, default	-
  popupOffset,	// Sub-menu offset, not working when mode="inline", Type: [number, number], default	-
  theme,	// Color theme of the SubMenu (inherits from Menu by default), Type: light | dark, default	-
  onTitleClick,// Callback executed when the sub-menu title is clicked, Type: 	function({ key, domEvent }), default	-
   */
  /*
  ------ Menu Item Group Type ------
  type: 'group', // Define type as group to make as group:
  children, // Sub-menu items, Type: MenuItem[], default -
  label, // The title of the group, Type: ReactNode, default -
   */
  /*
  ------ Menu Divider Type ------
  type: 'divider', // Must have
  dashed: false, // Whetter line is dashed, Type: boolean, default false
   */
  return (
    <AntMenu
      items={items}
      mode={mode}
      onClick={onClick}
      onDeselect={onDeselect}
      onSelect={onSelect}
      onOpenChange={onOpenChange}
      theme={theme}
      triggerSubMenuAction={triggerSubMenuAction}
      subMenuOpenDelay={subMenuOpenDelay}
      subMenuCloseDelay={subMenuCloseDelay}
      style={style}
      selectedKeys={selectedKeys}
      selectable={selectable}
      overflowedIndicator={overflowedIndicator}
      openKeys={openKeys}
      multiple={multiple}
      inlineIndent={inlineIndent}
      inlineCollapsed={inlineCollapsed}
      forceSubMenuRender={forceSubMenuRender}
      expandIcon={expandIcon}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
    />
  );
};
export default Menu;
