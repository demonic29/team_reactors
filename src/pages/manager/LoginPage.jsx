import React from "react";

const LoginPage = () => {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="p-4 rounded-lg shadow-md w-full max-w-[600px]">
				<h1 className="mb-5 font-bold text-center">Login</h1>
				<div>
					<div className="flex gap-4">
						<label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="border" placeholder="username" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
