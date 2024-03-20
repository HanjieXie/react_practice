import { createBrowserRouter } from "react-router-dom";

import Home from '../Component/FormDemo_0/index.tsx';

/**
 * @type {import('react-router-dom').BrowserRouter}
 */
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

export default router;
