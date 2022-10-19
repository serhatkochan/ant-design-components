// antd
import { Menu } from 'antd';

// components
import {
  Dropdown, DatePicker
} from "components";

// css
import 'antd/dist/antd.min.css';

const menu = () => {
  return <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" href="#">
            1st menu item
          </a>
        ),
      }
    ]}
  />;
}
function App() {
  return (
    <div>
      <Dropdown menu={menu} text="Dropdown Text" />
      <DatePicker />
    </div>
  );
}

export default App;
