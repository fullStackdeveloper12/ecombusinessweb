import React from "react";
import TopStrip from "./TopStrip.jsx";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar.jsx";
import DynamicAuth from "./DynamicAuth.jsx";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <TopStrip />
        <div className="header py-4 border-b-[1px] border-gray-250">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[20%] flex items-center justify-center">
              <Link to="/">Logo</Link>
            </div>
            <div className="col2 w-[55%]">
              {/* SearchBar */}
              <SearchBar />
            </div>
            <div className="col3 w-[25%] flex items-center pl-5">
              {/* Login / Register / Cart / Wishlist */}
              <DynamicAuth />
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
