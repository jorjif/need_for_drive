import React, { useState } from "react";
import { ReactComponent as MenuButton } from "../icons/menu_btn.svg";
import { ReactComponent as TelegaIcon } from "../icons/Telegram_white.svg";
import { ReactComponent as InstaIcon } from "../icons/Instagram_white.svg";
import { ReactComponent as FbIcon } from "../icons/Facebook_white.svg";
import "./nav.scss";

function NavBar(props) {
  const [navStatus, setNav] = useState(false);
  function toggleMenu() {
    setNav(!navStatus);
  }
  return (
    <div>
      <nav className={navStatus ? "" : "nav_hidden"}>
        <MenuButton
          className={`nav_btn ${navStatus ? "nav_btn_off" : ""}`}
          onClick={toggleMenu}
        />
        <div className={`nav_menu ${navStatus ? "" : "nav_menu_hidden"}`}>
          <ul>
            <li>Парковка</li>
            <li>Страховка</li>
            <li>Бензин</li>
            <li>Обслуживание</li>
          </ul>
          <div className="nav_menu_soc-media">
            <TelegaIcon />
            <FbIcon />
            <InstaIcon />
          </div>
        </div>
        <div
          className={`nav_lang-select ${navStatus ? "nav_lang-select_hidden" : ""}`}
        >
          <p>Eng</p>
        </div>
      </nav>
    </div>
  );
}
export { NavBar };
