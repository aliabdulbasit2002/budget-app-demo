/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Sidebar/Navbar";

const RootLayout = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && <Navbar />}
      {isAuthenticated && <Outlet />}
    </>
  );
};

export default RootLayout;
