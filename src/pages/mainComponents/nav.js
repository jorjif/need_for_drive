import React, { useState } from "react";
import { ReactComponent as MenuButton } from "../icons/menu_btn.svg";
import { ReactComponent as TelegaIcon } from "../icons/Telegram_white.svg";
import { ReactComponent as InstaIcon } from "../icons/Instagram_white.svg";
import { ReactComponent as FbIcon } from "../icons/Facebook_white.svg";

function NavBar(props) {
  const [navStatus, setNav] = useState(false);
  function toggleMenu() {
    setNav(!navStatus);
  }
  return (
    <div>
      <nav>
        <MenuButton className="menu_btn" onClick={toggleMenu} />
        <div className="menu">
          <ul>
            <li>Парковка</li>
            <li>Страховка</li>
            <li>Бензин</li>
            <li>Обслуживание</li>
          </ul>
          <div className="soc_media">
            <TelegaIcon />
            <FbIcon />
            <InstaIcon />
          </div>
        </div>
        <div className="lang_select">
          <p href="#">Eng</p>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background-color: #111518;
          position: absolute;
          width: ${navStatus ? "max(614px, 55vw)" : "clamp(64px ,5vw, 90px)"};
          height: 100vh;
          left: 0px;
          top: 0px;
          color: #ffffff;
        }
        .menu_btn {
          padding-left: 16px;
          padding-top: 32px;
        }
        .menu {
          display: ${navStatus ? "flex" : "none"};
          flex-direction: column;
          padding-left: max(97px, 17%);
          margin: auto;
        }
        .menu ul {
          list-style: none;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 37px;

          padding: 0;
        }
        .soc_media {
          padding: 0;
        }
        .soc_media svg {
          margin-right: 56px;
        }
        .lang_select {
          position: absolute;
          bottom: 0;
          left: 16px;
        }
      `}</style>
    </div>
  );
}
export { NavBar };
