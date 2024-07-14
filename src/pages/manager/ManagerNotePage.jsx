import React, { useReducer } from "react";
import { getTimestampInSeconds } from "utils/functions";

const init = {
	name: "",
	age: "",
	habits: "",
	friends: "",
};

const reducer = (state, action) => {
	switch (action.type) {
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

const ManagerNotePage = () => {
	const [state, dispatch] = useReducer(reducer, init);

	const handleAddNew = async () => {
		const API_POST =
			"https://docs.google.com/forms/d/e/1FAIpQLSegY4y5iT2Nywqxn9jt9hVbRVwItQFxpS3uViBWyTzEuFYR7w/formResponse";
		const formData = new FormData();
		formData.append("entry.2126560990", getTimestampInSeconds());
		formData.append("entry.1026596653", state.name);
		formData.append("entry.964811420", state.age);
		formData.append("entry.948622883", state.habits);
		formData.append("entry.1043001156", state.friends);
		await fetch(API_POST, {
			method: "POST",
			body: formData,
			mode: "no-cors",
		});
	};

  const handleDelete = async () => {
    const API_POST =
			"https://docs.google.com/forms/d/e/1FAIpQLSegY4y5iT2Nywqxn9jt9hVbRVwItQFxpS3uViBWyTzEuFYR7w/formResponse";
		const formData = new FormData();
    formData.append('entry.650362327', 300)
    await fetch(API_POST, {
			method: "POST",
			body: formData,
			mode: "no-cors",
		});
  }

	return (
		<div>
			<input
				type="text"
				id="name"
				placeholder="name"
				onChange={(e) =>
					dispatch({ type: "SET_NAME", payload: e.target.value })
				}
			/>
			<input
				type="text"
				id="age"
				placeholder="age"
				onChange={(e) =>
					dispatch({ type: "SET_AGE", payload: e.target.value })
				}
			/>
			<input
				type="text"
				id="habits"
				placeholder="habits"
				onChange={(e) =>
					dispatch({ type: "SET_HABITS", payload: e.target.value })
				}
			/>
			<input
				type="text"
				id="friends"
				placeholder="friends"
				onChange={(e) =>
					dispatch({ type: "SET_FRIENDS", payload: e.target.value })
				}
			/>
			<button onClick={handleAddNew}>Submit</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default ManagerNotePage;
