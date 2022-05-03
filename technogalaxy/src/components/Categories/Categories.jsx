import React from "react";
import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faTable } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faTablet } from "@fortawesome/free-solid-svg-icons";
import Monitor from "./Monitor/Monitor";
import { Routes, Route, NavLink } from "react-router-dom";

const Categories = (props) => {
  return (
    <div className="rows">
      <div className="items offset-lg-1 col-lg-10 offset-lg-1">
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon
              icon={faComputer}
              color="darkslateblue"
              size="8x"
            />
            <NavLink className="itemLink" to="/computers">
              <div className="itemText">Computers</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faLaptop} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/laptops">
              <div className="itemText">Laptops</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faTv} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/monitors">
              <div className="itemText">Monitors</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faTablet} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/tablets">
              <div className="itemText">Tablets</div>
            </NavLink>
          </div>
        </div>
        <div className="item computerItem">
          <div className="itemContents">
            <FontAwesomeIcon
              icon={faKeyboard}
              color="darkslateblue"
              size="8x"
            />
            <NavLink className="itemLink" to="/keyboards">
              <div className="itemText">Keyboards</div>
            </NavLink>
          </div>
        </div>
        <div className="item computerItem">
          <div className="itemContents">
            <FontAwesomeIcon icon={faMouse} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/mouses">
              <div className="itemText">Mouses</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon
              icon={faHeadphones}
              color="darkslateblue"
              size="8x"
            />
            <NavLink className="itemLink" to="/headphones">
              <div className="itemText">Headphones</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faBolt} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/cables">
              <div className="itemText">Cables</div>
            </NavLink>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/computers" element={<Monitor />} />
      </Routes>
    </div>
  );
};

export default Categories;
