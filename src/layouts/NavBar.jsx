import Button from "components/buttons/Button";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/rekiteku-logo.svg";
import noteLinkIcon from "../assets/img/note-link.svg"; // SVGファイルをインポート

const NavBar = () => {
  // const location = useLocation();
  // const pathname = location.pathname;

  // const getPageName = () => {
  //   const navItem = navs.find((nav) => nav.to === pathname);
  //   return navItem ? navItem.content : "";
  // };

  return (
    <div className="container h-[65px] bg-white shadow-sm items-center flex justify-between">
      <div className="flex items-center gap-4">
        <img src={logo} alt="歴てくのロゴ" />
        <span className="font-bold text-3xl text-secondaryColor">歴てく</span>
        {/* <span className="font-bold text-[18px] text-secondaryColor">
          {getPageName()}
        </span> */}
      </div>
      <div className="flex items-center justify-center gap-16">
        {navs.map((nav) =>
          nav.external ? (
            <a
              key={nav.content}
              href={nav.to}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[18px] hover:text-primaryColor hover:underline hover:underline-offset-2 transition-all inline-flex items-center group"
            >
              {nav.content}
              {nav.content === "ノート" && (
                <img
                  src={noteLinkIcon}
                  alt="note link icon"
                  className="ml-2 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </a>
          ) : (
            <NavLink
              key={nav.content}
              to={nav.to}
              className="font-semibold text-[18px] hover:text-primaryColor hover:underline hover:underline-offset-2 transition-all"
            >
              {nav.content}
            </NavLink>
          )
        )}
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
    content: "私達について",
    to: "/about",
  },
  {
    content: "ノート",
    to: "https://note.com/reki_teku0531/",
    external: true,
  },
  {
    content: "ツアー",
    to: "/tour",
  },
];

export default NavBar;
