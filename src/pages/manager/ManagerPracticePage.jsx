import Button from "components/buttons/Button";
import { useApi } from "contexts/managerPage/api-context";
import React, { useReducer } from "react";

const initState = {
	id: "",
	name: "",
	age: "",
	habits: "",
	friends: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_ID":
			return { ...state, id: action.payload };
		case "SET_NAME":
			return { ...state, name: action.payload };
		case "SET_AGE":
			return { ...state, age: action.payload };
		case "SET_HABITS":
			return { ...state, habits: action.payload };
		case "SET_FRIENDS":
			return { ...state, friends: action.payload };
		default:
			return state;
	}
};

const ManagerPracticePage = () => {
	const { loading } = useApi();
	const [state, dispatch] = useReducer(reducer, initState);

	const handleSend = async () => {
		const API_POST =
			"https://docs.google.com/forms/d/e/1FAIpQLSegY4y5iT2Nywqxn9jt9hVbRVwItQFxpS3uViBWyTzEuFYR7w/formResponse";
		const formData = new FormData();

		formData.append("entry.2126560990", state.id);
		formData.append("entry.1026596653", state.name);
		formData.append("entry.964811420", state.age);
		formData.append("entry.948622883", state.habits);
		formData.append("entry.1043001156", state.friends);

		const response = await fetch(API_POST, {
			method: "POST",
      body: formData,
      mode: "no-cors",
		});

    console.log(response)
	};

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					<div>
						<div>SET_ID</div>
						<input
							type="text"
							placeholder="SET_ID"
							onChange={(e) =>
								dispatch({
									type: "SET_ID",
									payload: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<div>SET_NAME</div>
						<input
							type="text"
							placeholder="SET_NAME"
							onChange={(e) =>
								dispatch({
									type: "SET_NAME",
									payload: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<div>SET_AGE</div>
						<input
							type="text"
							placeholder="SET_AGE"
							onChange={(e) =>
								dispatch({
									type: "SET_AGE",
									payload: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<div>SET_HABITS</div>
						<input
							type="text"
							placeholder="SET_HABITS"
							onChange={(e) =>
								dispatch({
									type: "SET_HABITS",
									payload: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<div>SET_FRIENDS</div>
						<input
							type="text"
							placeholder="SET_FRIENDS"
							onChange={(e) =>
								dispatch({
									type: "SET_FRIENDS",
									payload: e.target.value,
								})
							}
						/>
					</div>
					<Button onClick={handleSend} className="mt-3">
						Send
					</Button>
				</div>
			)}
		</>
	);
};

export default ManagerPracticePage;
