import { useState } from "react";
const HomePage = () => {
  const [title, setTitle] = useState("首页");
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <section ></section>
      </main>
    </>
  );
};
export default HomePage;
