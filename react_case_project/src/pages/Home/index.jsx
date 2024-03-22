import React, { Component } from "react";
import "./Home.css";
// import routesList from "../../routes/index";

import { NavLink, useRoutes, Outlet } from "react-router-dom";
const selectOption = ({isActive}) => {
  return isActive ? 'items_option_selected':'items_option'
}
// const element = useRoutes(routesList);

function Home () {
    return (
      <div className="panel_container">
        <h3>Home Page</h3>
        <p>嵌套路由</p>
        <div className="select_container">
            <header className="borderLine select_option">
                <NavLink className={selectOption} to="news">News</NavLink>
                <NavLink className={selectOption} to="message">Message</NavLink>
            </header>
            <div className="borderLine items_layerout">
                {/* Outlet 指定路由呈现位置 */}
                <Outlet />
            </div>
        </div>
      </div>
    );
}

export default Home;