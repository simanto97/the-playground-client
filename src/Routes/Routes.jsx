import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SubCategories from "../Pages/Home/SubCategories/SubCategories";
import AllToysLayout from "../Layout/AllToysLayout";
import SingleToyLayout from "../Layout/SingleToyLayout";
import LoginLayout from "../Layout/LoginLayout";
import RegisterLayout from "../Layout/RegisterLayout";
import SecretRoute from "./SecretRoute";
import AddToyLayout from "../Layout/AddToyLayout";
import MyToysLayout from "../Layout/MyToysLayout";
import UpdateToyLayout from "../Layout/UpdateToyLayout";

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
  {
    path: "/all-toys/:id",
    element: (
      <SecretRoute>
        <SingleToyLayout></SingleToyLayout>
      </SecretRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/all-toys/${params.id}`),
  },
  {
    path: "/add-toy",
    element: (
      <SecretRoute>
        <AddToyLayout></AddToyLayout>
      </SecretRoute>
    ),
  },
  {
    path: "/my-toys",
    element: (
      <SecretRoute>
        <MyToysLayout></MyToysLayout>
      </SecretRoute>
    ),
  },
  {
    path: "/update-toy/:id",
    element: (
      <SecretRoute>
        <UpdateToyLayout></UpdateToyLayout>
      </SecretRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/all-toys/${params.id}`),
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
  },
  {
    path: "/register",
    element: <RegisterLayout></RegisterLayout>,
  },
]);
export default router;
