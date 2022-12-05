import Welcome from "./components/Welcome.jsx";
import Accounts from "./components/Accounts.jsx";
import SendEther from "./components/SendEther.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="Flex">
      <div className="welMargin">
        <Welcome />
      </div>
      <div className="Account">
        <Accounts />
      </div>

      <div>
        <SendEther />
      </div>
    </div>
  );
};
export default App;
