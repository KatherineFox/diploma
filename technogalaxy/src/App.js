import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from "./Logo.png";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Monitor from "./components/Categories/Monitor/Monitor";
import Categories from "./components/Categories/Categories";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <ul className="navbar">
            <li>
              <img src={logo} alt="logo"></img>
            </li>
            <li>
              <NavLink className="appLink" to="/diploma">
                MAIN
              </NavLink>
            </li>
            <li>
              <NavLink className="appLink" to="categories">
                CATEGORIES
              </NavLink>
            </li>
            <li>
              <NavLink className="appLink" to="login">
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/diploma" element={<Main />} />
          <Route exact path="/categories" element={<Monitor />} />
        </Routes>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
