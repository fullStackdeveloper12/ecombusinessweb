import React from "react";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="searchbox relative w-[100%] h-[50px] bg-[#e5e5e5] rounded-md p-2 ">
      <input
        type="text"
        placeholder="Search for products......"
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px] placeholder-placeholder-custom placeholder:placeholder-lg placeholder-black"
      />
      <Button className="!absolute top-[5px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
        <IoIosSearch className="text-black text-[20px]" />
      </Button>
    </div>
  );
};

export default SearchBar;
