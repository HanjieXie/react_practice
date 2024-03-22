import { useState } from "react";
import "./App.css";
import { NavLink, useRoutes } from "react-router-dom";
import routesList from "./routes";

const ComputedActiveClass = ({ isActive }) => {
  return isActive ? "selectedPanel" : "";
};

function App() {
  // const [count, setCount] = useState(0)
  const element = useRoutes(routesList);
  return (
    <>
      <div className="page_container">
        <header>
          <h1>React Task Case</h1>
        </header>
        <main>
          <section className="slideBar borderLine">
            <div className="Link_btn">
              <NavLink className={ComputedActiveClass} to="/home">
                Home Page
              </NavLink>
            </div>
            <div className="Link_btn">
              <NavLink className={ComputedActiveClass} to="/about">
                v5 和 v6 的路由的改变
              </NavLink>
            </div>
          </section>
          <section className="selectPanel borderLine">
            {/* 注册路由 Route */}
            {/* <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes> */}
            {element}
          </section>
        </main>
      </div>
    </>
  );
}
export default App;
