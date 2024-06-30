import React from "react";
import { Link } from "react-router-dom";
import { navigationMenu } from "../../constants";
/**
 * Header component for displaying navigation menu.
 *
 * @returns {JSX.Element} The Header component.
 */
const Header = () => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center sticky top-0">
      <div className="text-white text-lg font-bold">
        <Link to="/">MyIndiaa</Link>
      </div>
      <nav className="flex gap-4">
        {navigationMenu.map((menu) => {
          return (
            <Link to={menu.path} className="text-white" key={menu.id}>
              {menu.key}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
