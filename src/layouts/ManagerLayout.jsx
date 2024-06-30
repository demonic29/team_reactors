import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

const ManagerLayout = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname === "/manager") {
			return navigate("/manager/home");
		}
	}, [pathname, navigate]);

	const getPageName = () => {
		const managerNav = managerNavs.filter(item => item.to === pathname)[0]
		return managerNav?.name
	}

	const logo = require("../assets/rekiteku-logo.png");

	return (
		<div className="flex h-screen">
			<div className="w-[260px] border-r border-r-gray-200">
				<div className="h-[65px] border-b border-b-gray-200 px-4 flex items-center">
					<div className="flex items-center gap-2 font-bold text-secondaryColor text-[22px]">
						<img
							srcSet={`${logo} 2.2x`}
							alt="rekiteku-logo"
						/>
						<span>歴てく</span>
					</div>
				</div>
				<div className="p-2">
					{managerNavs.map((managerNav, index) => (
						<NavLink
							key={index}
							to={managerNav.to}
							className={`text-lg px-4 py-2 rounded-lg font-semibold transition-all block hover:bg-primaryColor hover:text-white mb-1  duration-150 ${
								pathname === managerNav.to
									? "bg-primaryColor text-white"
									: ""
							}`}
						>
							{managerNav.name}
						</NavLink>
					))}
				</div>
			</div>
			<div className="flex-1">
				<div className="h-[65px] border-b border-b-gray-200 flex items-center justify-between px-4">
					<span className="text-2xl font-semibold text-secondaryColor">
						{getPageName()}
					</span>
					<div className="flex items-center gap-2">
						<div>
							<div className="text-lg font-semibold text-right">
								Yoshimaru さん
							</div>
							<div className="text-gray-500">
								rekiteku.admin@gmail.com
							</div>
						</div>
						<div className="flex items-center justify-center text-lg font-bold text-white rounded-full size-12 bg-secondaryColor">
							Y
						</div>
					</div>
				</div>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

const managerNavs = [
	{
		name: "Home",
		to: "/manager/home",
	},
	{
		name: "About",
		to: "/manager/about",
	},
	{
		name: "Tour",
		to: "/manager/tour",
	},
	{
		name: "Contact",
		to: "/manager/contact",
	},
];

export default ManagerLayout;
