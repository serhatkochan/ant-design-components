// components
import {
  Dropdown,
} from "components";

// css
import 'antd/dist/antd.min.css';
import 'assets/css/index.scss';


function App() {
  return (
    <div className="appContainer">
      <Dropdown overlay={<>element</>} child="Dropdown Text" />
    </div>
  );
}

export default App;
