import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClickFunction = () => {
    // setCount(count + 1);

    setCount((count) => {
      count++;
      console.log("count", count);
      return count;
    });
    // console.log("Count value:", count);
  };
  return (
    <>
      <h1>useState的使用：{count}</h1>
      <button onClick={handleClickFunction}>点击+1</button>
    </>
  );
}

export default App;
