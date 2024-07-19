import React, { useEffect, useRef, useState } from "react";

const LoginPage = () => {
	const [userList, setUserList] = useState([]);
	const usernameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = emailRef.current.value;

		const check = userList.find((user) => user.email === email);
		if (check) {
			alert("Email already exists");
			return;
		} else {
			const newUser = {
				username: usernameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
        userdata: {
          age: 10,
          male: true
        }
			};
			await signUp(newUser);
		}
	};

	async function signUp(newUser) {
		const API_POST =
			"https://docs.google.com/forms/d/e/1FAIpQLSeeWADhli-OeidJ8VZVXfJFKQfHaBu_XeWQIcc3Z88etFHPkg/formResponse";
		const formData = new FormData();
		formData.append("entry.38328504", newUser.username);
		formData.append("entry.988159177", newUser.email);
		formData.append("entry.1608198716", newUser.password);
		formData.append("entry.1899429339", JSON.stringify(newUser.userdata));
		fetch(API_POST, {
			method: "POST",
			body: formData,
			mode: "no-cors",
		});
	}

	useEffect(() => {
		async function fetchUserData() {
			const respone = await fetch(
				"https://script.googleusercontent.com/macros/echo?user_content_key=wla5AzncRnL5axmMld4AcuSVd9hwuuCU1mlsOBsY60SSTOveS90gQOIO8u9k2ct3glZrM_93--eX2uTQj_g1WKQSDRyNSiK-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMoPkMTRXwaSP98j6tw92KykixUG84ivazWD5RCq5q46F3_36cWgXxKOetxnWTC5By4soWhro09ca9A0nszWzBZiqB-b1xIGOg&lib=MMiGAYxLtzMEZVIJCgNgXZ5fPwTTAwr0g"
			);
			const data = await respone.json();
			setUserList(data.data);
		}
		fetchUserData();
	}, []);

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="p-4 rounded-lg shadow-md w-full max-w-[600px]">
				<h1 className="mb-5 font-bold text-center">Login</h1>
				<div>
					<div className="flex gap-4">
						<label htmlFor="username">Username</label>
						<input
							ref={usernameRef}
							type="text"
							id="username"
							name="username"
							className="border"
							placeholder="username"
							autoCorrect="off"
						/>
					</div>
					<div className="flex gap-4">
						<label htmlFor="email">Email</label>
						<input
							ref={emailRef}
							type="text"
							id="email"
							name="email"
							className="border"
							placeholder="email"
							autoCorrect="off"
						/>
					</div>
					<div className="flex gap-4">
						<label htmlFor="password">Password</label>
						<input
							ref={passwordRef}
							type="text"
							id="password"
							name="password"
							className="border"
							placeholder="password"
							autoCorrect="off"
						/>
					</div>
					<div>
						<button
							onClick={handleSubmit}
							className="bg-gray-300 border border-gray-500"
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
