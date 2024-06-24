import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/buttons/Button";

const NavBar = () => {
<<<<<<< HEAD
  return (
    <div className="container h-[65px] bg-white shadow-sm items-center flex justify-between">
      <div className="flex items-center gap-4">
        <img srcSet="src/assets/rekiteku-logo.png 2x" alt="rekiteku-logo" />
      </div>
      <div className="flex items-center justify-center gap-16">
        {navs.map((nav) => (
          <NavLink
            key={nav.content}
            to={nav.to}
            className={
              "text-pink text-xs font-semibold text-[18px] hover:text-primaryColor hover:underline hover:underline-offset-2 transition-all"
            }
          >
            {nav.content}
          </NavLink>
        ))}
      </div>
      <div>
        <Button>FUCK</Button>
      </div>
    </div>
  );
=======
    return (
        <div className="container h-[65px] bg-white shadow-sm items-center flex justify-between">
            <div className="flex items-center gap-4">
                <img
                    srcSet="src/assets/rekiteku-logo.png 2x"
                    alt="rekiteku-logo"
                />
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
>>>>>>> e0f93cdeb79bfc62e8eaea155f38b9285b8388a1
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
    to: "/contact",
  },
];

export default NavBar;
