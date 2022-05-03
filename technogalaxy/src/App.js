import "./App.css";
import Main from "./components/Main/Main";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Router,
} from "react-router-dom";
import logo from "./Logo.png";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/Categories/Categories";
import Cable from "./components/Categories/Cable/Cable";
import Computer from "./components/Categories/Computer/Computer";
import Laptop from "./components/Categories/Laptop/Laptop";
import Monitor from "./components/Categories/Monitor/Monitor";
import Tablet from "./components/Categories/Tablet/Tablet";
import Keyboard from "./components/Categories/Keyboard/Keyboard";
import Mouse from "./components/Categories/Mouse/Mouse";
import Headphones from "./components/Categories/Headphones/Headphones";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

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
              <div className="dropdown">
                <button className="dropButton">ACCOUNT</button>
                <div className="dropContent">
                  <NavLink className="appLink linkAccount" to="profile">
                    PROFILE
                  </NavLink>
                  <NavLink className="appLink linkAccount" to="categories">
                    LOGOUT
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/diploma" element={<Main />} />
            <Route exact path="/categories/computers" element={<Computer />} />
            <Route exact path="/categories/laptops" element={<Laptop />} />
            <Route exact path="/categories/monitors" element={<Monitor />} />
            <Route exact path="/categories/tablets" element={<Tablet />} />
            <Route exact path="/categories/keyboards" element={<Keyboard />} />
            <Route exact path="/categories/mouses" element={<Mouse />} />
            <Route
              exact
              path="/categories/headphones"
              element={<Headphones />}
            />
            <Route exact path="/categories/cables" element={<Cable />} />
            <Route exact path="categories" element={<Categories />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="profile" element={<Profile />} />
          </Routes>
        </ScrollToTop>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
