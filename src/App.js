// project import
//import Routes from "./routes";
import Home from "./Home";
import About from "./About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <Router>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
  </Router>
);

export default App;
