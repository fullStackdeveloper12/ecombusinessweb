import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const DynamicAuth = () => {
  return (
    <>
      <ul className="flex items-center justify-end gap-3 w-full">
        <li className="list-none">
          <Link
            to="/login"
            className="link transition text-[15px] font-[500] hover:text-[#ff5252]"
          >
            Login
          </Link>
        </li>{" "}
        <li>
          |{" "}
          <Link
            to="/register"
            className="link transition text-[15px] font-[500] hover:text-[#ff5252]"
          >
            Register
          </Link>
        </li>
        <li>
          <Tooltip title="Compare">
            <IconButton aria-label="compare">
              <StyledBadge badgeContent={2} color="secondary">
                <IoIosGitCompare />
              </StyledBadge>
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Wishlist">
            <IconButton aria-label="heart">
              <StyledBadge badgeContent={7} color="secondary">
                <IoMdHeartEmpty />
              </StyledBadge>
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <IoCartOutline />
              </StyledBadge>
            </IconButton>
          </Tooltip>
        </li>
      </ul>
    </>
  );
};

export default DynamicAuth;
