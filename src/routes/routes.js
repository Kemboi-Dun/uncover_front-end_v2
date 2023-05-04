import { createBrowserRouter, Outlet } from "react-router-dom";

// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import Home from "../pages/Home";
import Single from "../pages/Single";
import Write from "../pages/Write";
import Category from "../pages/Category";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:cat",
        element: <Category />,
      },
      {
        path: "/post/:cat/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
