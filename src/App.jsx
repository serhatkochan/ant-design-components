// components
import {
  Dropdown, DatePicker
} from "components";

// css
import 'antd/dist/antd.min.css';
import 'assets/css/index.scss';


function App() {
  return (
    <div className="appContainer">
      <Dropdown overlay={<div>element</div>} child="Dropdown Text" />
      <DatePicker />
    </div>
  );
}

export default App;
