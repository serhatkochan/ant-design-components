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
      <Dropdown overlay={<>element</>} child="Dropdown Text" />
      <Menu items={menuItems} mode="horizontal" />
    </div>
  );
}

export default App;
