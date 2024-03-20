import { useState } from "react";
import "./App.css";
interface ChidrenComponent {
  title: string;
  changeTitle: (newtitle: string) => void;
}

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("父组件的title");
  const handleClickFunction = () => {
    setCount((count) => {
      count++;
      console.log("count", count);
      return count;
    });
  };

  // 修改父组件标题
  const changeTitle = (newtitle: string) => {
    setTitle(newtitle);
  };
  return (
    <>
      <p>useState的使用：{count}</p>
      <button onClick={handleClickFunction}>点击+1</button>
      <p>父组件的参数：</p>
      <hr />
      <h2>props的使用</h2>
      <ChidrenComponent
        title={title}
        changeTitle={changeTitle}
      ></ChidrenComponent>
    </>
  );
}
const ChidrenComponent: React.FC<ChidrenComponent> = ({
  title,
  changeTitle,
}) => {
  const ChidrenChangeTitle = () => {
    changeTitle("子组件的title");
  };
  return (
    <>
      <div>标题：{title}</div>
      <button onClick={ChidrenChangeTitle}>修改父组件的标题状态</button>
    </>
  );
};

export default App;
