import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SubCategories from "../Pages/Home/SubCategories/SubCategories";
import AllToysLayout from "../Layout/AllToysLayout";

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
  {
    path: "/all-toys",
    element: <AllToysLayout></AllToysLayout>,
  },
]);
export default router;
