import React, { useState } from "react";
import Button from "@mui/material/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiAngleDown } from "react-icons/tfi";
import { GoRocket } from "react-icons/go";
import { Link } from "react-router-dom";
import CategoriesDrawer from "./CategoriesDrawer.jsx";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Fashion",
    href: "/fashion",
    submenu: [
      { label: "Men's Clothing", href: "/fashion/mens" },
      { label: "Women's Clothing", href: "/fashion/womens" },
      { label: "Accessories", href: "/fashion/accessories" },
      { label: "Footwear", href: "/fashion/footwear" },
    ],
  },
  {
    label: "Electronics",
    href: "/electronics",
    submenu: [
      { label: "Mobile Phones", href: "/electronics/mobiles" },
      { label: "Laptops", href: "/electronics/laptops" },
      { label: "Cameras", href: "/electronics/cameras" },
      { label: "Audio", href: "/electronics/audio" },
    ],
  },
  { label: "Bags", href: "/bags" },
  { label: "Footwears", href: "/footwears" },
  { label: "Groceries", href: "/groceries" },
  {
    label: "Beauty",
    href: "/beauty",
    submenu: [
      { label: "Makeup", href: "/beauty/makeup" },
      { label: "Skincare", href: "/beauty/skincare" },
      { label: "Haircare", href: "/beauty/haircare" },
      { label: "Fragrances", href: "/beauty/fragrances" },
    ],
  },
  { label: "Wellness", href: "/wellness" },
];

const NavBar = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered nav item

  // Opens the categories drawer
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2 bg-white shadow-md">
        <div className="flex items-center justify-end gap-5 px-4">
          {/* Category Drawer Toggle */}
          <div className="col_1 w-[21%] pl-8">
            <Button
              className="!text-black flex items-center"
              onClick={openCategoryPanel}
            >
              <HiOutlineMenuAlt1 className="text-[18px]" />
              <span className="ml-2">Shop By Categories</span>
              <TfiAngleDown className="text-[12px] !font-bold ml-1" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="col_2 w-[55%]">
            <ul className="flex items-center gap-3 relative">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="list-none relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link to={item.href} className="block">
                    <Button className="!text-[rgba(0,0,0,0.8)] !font-[500] flex items-center">
                      {item.label}
                      {item.submenu && (
                        <TfiAngleDown className="text-[12px] ml-1" />
                      )}
                    </Button>
                  </Link>

                  {/* Submenu Dropdown */}
                  {item.submenu && hoveredIndex === index && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border mt-1 z-10">
                      <ul className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="list-none">
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-[rgba(0,0,0,0.8)] hover:bg-gray-100 transition"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Promotional Text */}
          <div className="col_3 w-[23%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Drawer for Categories */}
      <CategoriesDrawer
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default NavBar;
