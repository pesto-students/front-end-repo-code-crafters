import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoText from "./LogoText";
import greenLogo from "../assets/logo/logo-no-bg-green.png";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { logout } from "../app/reducers/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : null;
  const path = window.location.pathname;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header>
      <nav className="flex justify-center items-center w-full h-150px bg-white shadow-md">
        <Link to="/">
          <LogoText
            div="flex items-center space-x-2 h-20 w-auto ml-5"
            text="text-black text-2xl font-medium"
            src={greenLogo}
          />
        </Link>
        {!token && path !== "/login" && path !== "/register" && (
          <Button
            className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-medium bg-primary hover:bg-secondary"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login / Register
          </Button>
        )}
        {token && (
          <Button
            className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-medium bg-primary hover:bg-secondary"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
}
