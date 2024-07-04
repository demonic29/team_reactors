import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/buttons/Button";
import logo from "../assets/img/rekiteku-logo.svg";

const NavBar = () => {
  return (
    <div className="container h-[65px] bg-white shadow-sm items-center flex justify-between font-kiwiMaru">
      <div className="flex items-center gap-4">
        <img src={logo} alt="歴てくのロゴ" />
      </div>
      <div className="flex items-center justify-center gap-16">
        {navs.map((nav) => (
          <NavLink
            key={nav.content}
            to={nav.to}
            className={
              "text-black font-semibold text-[18px] hover:text-primaryColor hover:underline hover:underline-offset-2 transition-all"
            }
          >
            {nav.content}
          </NavLink>
        ))}
      </div>
      <div>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
};

const navs = [
  {
    content: "ホーム",
    to: "/",
  },
  {
    content: "ノート",
    to: "/note",
  },
  {
    content: "ツアー",
    to: "/tour",
  },
  {
    content: "連絡",
    to: "/about",
  },
];

export default NavBar;
