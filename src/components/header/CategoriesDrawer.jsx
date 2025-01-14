import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";
import Collapse from "@mui/material/Collapse"; // Import Collapse

// Define your sub-sub-links
const subsublinks = {
  Fashion: ["Men's Clothing", "Women's Clothing", "Accessories", "Footwear"],
  Electronics: ["Mobile Phones", "Laptops", "Cameras", "Audio"],
  Home: ["Furniture", "Kitchen Appliances", "Decor", "Bedding"],
  Beauty: ["Makeup", "Skincare", "Haircare", "Fragrances"],
  Sports: ["Fitness Equipment", "Outdoor Gear", "Sportswear", "Accessories"],
};

const CategoriesDrawer = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  // Tracks which main submenus are open; keys are category indices
  const [openSubMenus, setOpenSubMenus] = useState({});
  // Tracks which sub-submenus are open; keys are subcategory indices
  const [openSubSubMenus, setOpenSubSubMenus] = useState({});

  // Toggles the drawer open/closed
  const toggleDrawer = (open) => () => {
    setIsOpenCatPanel(open);
    // Reset all submenus when closing the drawer
    if (!open) {
      setOpenSubMenus({});
      setOpenSubSubMenus({});
    }
  };

  // Toggle main submenu
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    // Optionally reset sub-submenus when toggling a main submenu
    setOpenSubSubMenus({});
  };

  // Toggle sub-submenu
  const toggleSubSubMenu = (index) => {
    setOpenSubSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Define your main categories
  const categories = [
    {
      name: "Fashion",
      subcategories: ["Apparel", "Accessories", "Footwear"],
    },
    {
      name: "Electronics",
      subcategories: ["Mobile Phones", "Laptops", "Cameras"],
    },
    {
      name: "Home",
      subcategories: ["Furniture", "Kitchen Appliances", "Decor"],
    },
    {
      name: "Beauty",
      subcategories: ["Makeup", "Skincare", "Haircare"],
    },
    {
      name: "Sports",
      subcategories: ["Fitness Equipment", "Outdoor Gear", "Sportswear"],
    },
    // Add more categories as needed
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categorypanel">
      {/* Header */}
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <FaRegWindowClose
          className="text-[16px] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h3>
      <Divider />

      {/* SCROLLABLE AREA */}
      <div className="scroll overflow-y-auto max-h-[80vh]">
        <ul>
          {categories.map((category, catIndex) => (
            <li key={catIndex} className="list-none">
              {/* Main Category */}
              <div
                className="flex items-center justify-between px-3 py-2 cursor-pointer"
                onClick={() => toggleSubMenu(catIndex)}
                aria-label={
                  openSubMenus[catIndex]
                    ? `Collapse ${category.name} submenu`
                    : `Expand ${category.name} submenu`
                }
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") toggleSubMenu(catIndex);
                }}
              >
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                    {category.name}
                  </Button>
                </Link>
                {/* Conditional Icon: Plus or Minus */}
                <div className="text-[20px]">
                  {openSubMenus[catIndex] ? (
                    <CiSquareMinus />
                  ) : (
                    <CiSquarePlus />
                  )}
                </div>
              </div>

              {/* Sub-menu for Main Category with Collapse */}
              <Collapse
                in={openSubMenus[catIndex]}
                timeout="auto"
                unmountOnExit
              >
                <ul className="pl-6">
                  {category.subcategories.map((subcategory, subIndex) => {
                    // Create a unique key for sub-submenu based on category and subcategory indices
                    const subSubKey = `${catIndex}-${subIndex}`;
                    return (
                      <li key={subIndex} className="list-none">
                        {/* Subcategory */}
                        <div
                          className="flex items-center justify-between px-3 py-2 cursor-pointer"
                          onClick={() => toggleSubSubMenu(subSubKey)}
                          aria-label={
                            openSubSubMenus[subSubKey]
                              ? `Collapse ${subcategory} sub-submenu`
                              : `Expand ${subcategory} sub-submenu`
                          }
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") toggleSubSubMenu(subSubKey);
                          }}
                        >
                          <Link to="/" className="w-full">
                            <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                              {subcategory}
                            </Button>
                          </Link>
                          {/* Conditional Icon: Plus or Minus */}
                          <div className="text-[20px]">
                            {openSubSubMenus[subSubKey] ? (
                              <CiSquareMinus />
                            ) : (
                              <CiSquarePlus />
                            )}
                          </div>
                        </div>

                        {/* Sub-sub-menu with Collapse */}
                        <Collapse
                          in={openSubSubMenus[subSubKey]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ul className="pl-6">
                            {subsublinks[category.name]?.map(
                              (item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="list-none mb-1 hover:text-[#ff5252] transition"
                                >
                                  <Link
                                    to="/"
                                    className="text-base text-[10.9px] uppercase w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </Collapse>
                      </li>
                    );
                  })}
                </ul>
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="left" open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoriesDrawer;
