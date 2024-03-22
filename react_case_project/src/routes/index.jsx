import { Navigate } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import About from "../pages/About/index.jsx";
import News from "../pages/Home/News/index.jsx";
import Message from "../pages/Home/Message/index.jsx";
import NewsDetails from "../pages/Home/News/NewsDetails/index.jsx";
import MessageDetails from "../pages/Home/Message/MessageDetails/index.jsx";
const routesList = [
  { path: "/", element: <Home /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <News />,
        children: [
          { 
            // 1.占位符传参
            path: "detail/:id/:title", 
            element: <NewsDetails />,

          }
        ],
      },
      {
        path: "message",
        element: <Message />,
        children: [{ path: "messagedetails", element: <MessageDetails /> }],
      },
    ],
  },
  { path: "/about", element: <About /> },
];

export default routesList;
