// components
import {
  Dropdown, Menu
} from "components";
// constants
import {menuItems} from "constants/menuItems";
// css
import "antd/dist/antd.min.css";
import "assets/css/index.scss";


function App() {
  return (
    <div className="appContainer">
      <div className="component">
        <Dropdown overlay={<>element</>} child="Dropdown Text" />
      </div>
      <div className="component">
        <Menu items={menuItems} mode="horizontal" />
      </div>
    </div>
  );
}

export default App;
