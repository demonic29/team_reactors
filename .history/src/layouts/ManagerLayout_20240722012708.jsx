import React from "react";
import { useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "contexts/auth-context";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "firebase-config";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";

const ManagerLayout = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { user } = useAuth();
	useEffect(() => {
		if (!user) {
			if (pathname === "/manager") {
				return navigate("/login");
			}
		} else {
			if (pathname === "/manager") {
				return navigate("/manager/home");
			}
		}
	}, [user, pathname, navigate]);

	const getPageName = () => {
		const managerNav = managerNavs.filter(item => item.to === pathname)[0]
		return managerNav?.name
	}

  const logo = require("../assets/rekiteku-logo.png");

	const handleSignOut = async () => {
		try {
			await signOut(auth);
			toast.success("サインアウト成功！");
			navigate("/login");
		} catch (error) {
			toast.error("サインアウト失敗！");
			console.log(error);
		}
	};

	return (
		<div className="flex h-screen">
			{/*navigation  */}
			<div className="w-[230px] border-r border-r-gray-200 flex flex-col">
				<div className="h-[65px] border-b border-b-gray-200 px-4 flex items-center">
					<div className="flex items-center gap-2 font-bold text-secondaryColor text-[22px]">
						<img
							srcSet={`${logo} 2.2x`}
							alt="rekiteku-logo"
						/>
						<span>歴てく</span>
					</div>
				</div>
				<div className="flex flex-col justify-between flex-1 p-2">
					<div>
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
					<div>
						<div
							onClick={handleSignOut}
							className="flex items-center gap-2 px-4 py-2 mb-1 text-lg font-semibold transition-all duration-150 rounded-lg cursor-pointer hover:bg-primaryColor hover:text-white"
						>
							<span>
								<FiLogOut />
							</span>
							<span>Sign Out</span>
						</div>
					</div>
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
								{`${user ? user?.displayName : "不明"} さん`}
							</div>
							<div className="text-gray-500">
								{user && user?.email}
							</div>
						</div>
						<div className="flex items-center justify-center text-lg font-bold text-white rounded-full size-12 bg-secondaryColor">
							Y
						</div>
					</div>
				</div>
				<div className="px-4 pt-4">
					<Outlet></Outlet>
				</div>
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
		name: "Tours",
		to: "/manager/tours",
	},
	{
		name: "Notes",
		to: "/manager/notes",
	},
	{
		name: "Practice",
		to: "/manager/practice",
	},
];

export default ManagerLayout;
