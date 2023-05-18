import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SubCategories from "../Pages/Home/SubCategories/SubCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SubCategories></SubCategories>,
      },
    ],
  },
]);
export default router;
