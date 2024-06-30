import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
/**
 * Layout component for displaying skeleton of our app.
 *
 * @returns {JSX.Element} Header , Footer and a empty outlet slot which will render depending on route.
 */
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 p-4 justify-center">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
