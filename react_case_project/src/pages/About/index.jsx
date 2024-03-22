import React, { Component } from "react";

const pointList1 = [
  {
    id: 1,
    title: "内置组件的变化",
    content: "移除了<Switch />,新增<Routes />; 重定向Navigate等",
  },
  {
    id: 2,
    title: "语法的变化",
    content: "原来的 component={About},现在是element={<About />}等",
  },
  {
    id: 3,
    title: "新增了多个Hook",
    content: "useParams, useNavigate, useMatch等",
  },
];

const pointList2 = [
  {
    id: 1,
    title: "写法不同",
    content: "一般组件:直接<Component />, 路由组件:要使用<Route path='路径' component={组件}/>",
  },
  {
    id: 2,
    title: "存放位置不同",
    content: "一般组件:放在component文件夹中,路由组件:放在pages文件夹中",
  },
  {
    id: 3,
    title: "接受的props参数不同",
    content: "一般组件:可以用来通信,传什么就可以接到什么,路由组件:接受路由属性,history,location,match",
  },
]
function About() {
  return (
    <div className="panel_container">
      <h3>v5和v6路由的版本不同点</h3>
      <ul>
        {pointList1.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
      <h3>一般组件和路由组件的区别</h3>
      <ul>
        {pointList2.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
