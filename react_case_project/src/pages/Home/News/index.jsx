import React from "react";
import { Link, useRoutes, Outlet } from "react-router-dom";
import './News.css';
const selectOption = ({isActive}) => {
  return isActive ? 'items_option_selected':'items_option'
}
const NewList = [
  {
    id: "1",
    title: "新闻标题1",
    content:"1.占位符传参",
  },
  {
    id: "2",
    title: "新闻标题2",
    content:"2.占位符传参",
  },
  {
    id: "3",
    title: "新闻标题3",
    content:"3.占位符传参",
  },
];
const Message = () => {
  return (
    <>
      <div className="Message_container">
        <ul>
          {NewList.map((item) => (
            <Link  to={`detail/${item.id}/${item.title}`} key={item.id}>{item.content}</Link>
          ))}
        </ul>
        <div className="message_details">
            <Outlet />
        </div>
      </div>
    </>
  );
};

export default Message;
