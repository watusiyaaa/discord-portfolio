// main entry point for the React application
import TopTitle from "./components/top-title";
import MidPart from "./components/mid-bt";
import Footer from "./components/footer";

// divider
import Divider from "./components/tools/divider";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="box">
        <TopTitle />
        <Divider />
        <MidPart />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
