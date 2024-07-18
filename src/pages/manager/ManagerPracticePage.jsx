import React, {  } from "react";

const ManagerPracticePage = () => {
	return <div>
		
	</div>;
};

export default ManagerPracticePage;













// const ManagerPracticePage = () => {
// 	const { loading } = useApi();

// 	return (
// 		<>
// 			{loading ? (
// 				<div>Loading...</div>
// 			) : (
// 				<div className="grid w-full grid-cols-4 ">
// 					<AddSection></AddSection>
// 					<EditSection></EditSection>
// 					<DeleteSection></DeleteSection>
// 					<UploadImageSection></UploadImageSection>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// const AddSection = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { isSubmitting },
// 	} = useForm({
// 		defaultValues: {
// 			id: "",
// 			name: "",
// 			age: "",
// 			habits: "",
// 			friends: "",
// 		},
// 	});

// 	const handleAddNew = async (values) => {
// 		const API_POST =
// 			"https://docs.google.com/forms/d/e/1FAIpQLSegY4y5iT2Nywqxn9jt9hVbRVwItQFxpS3uViBWyTzEuFYR7w/formResponse";
// 		const formData = new FormData();

// 		formData.append("entry.2126560990", values.id);
// 		formData.append("entry.1026596653", values.name);
// 		formData.append("entry.964811420", values.age);
// 		formData.append("entry.948622883", values.habits);
// 		formData.append("entry.1043001156", values.friends);

// 		const response = await fetch(API_POST, {
// 			method: "POST",
// 			body: formData,
// 			mode: "no-cors",
// 		});
// 		console.log(response);
// 	};
// 	return (
// 		<div>
// 			<div>
// 				<div>SET_ID</div>
// 				<input type="text" placeholder="SET_ID" {...register("id")} />
// 			</div>
// 			<div>
// 				<div>SET_NAME</div>
// 				<input
// 					type="text"
// 					placeholder="SET_NAME"
// 					{...register("name")}
// 				/>
// 			</div>
// 			<div>
// 				<div>SET_AGE</div>
// 				<input type="text" placeholder="SET_AGE" {...register("age")} />
// 			</div>
// 			<div>
// 				<div>SET_HABITS</div>
// 				<input
// 					type="text"
// 					placeholder="SET_HABITS"
// 					{...register("habits")}
// 				/>
// 			</div>
// 			<div>
// 				<div>SET_FRIENDS</div>
// 				<input
// 					type="text"
// 					placeholder="SET_FRIENDS"
// 					{...register("friends")}
// 				/>
// 			</div>
// 			<Button
// 				className="w-[100px] h-[50px] mt-3"
// 				onClick={handleSubmit(handleAddNew)}
// 			>
// 				{isSubmitting ? "..." : "ADD"}
// 			</Button>
// 		</div>
// 	);
// };

// const DeleteSection = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { isSubmitting },
// 	} = useForm({
// 		defaultValues: {
// 			deleteId: "",
// 		},
// 	});

// 	const handleDelete = async (values) => {
// 		const API_DELETE =
// 			"https://script.google.com/macros/s/AKfycbxo3usUX03KYQInXoB62U04Qiu0CBWiTmcsCJWbNyIDPJAqjR-fCB7X0R93rjcCOEL1/exec";
// 		const response = await fetch(
// 			`${API_DELETE}?deleteId=${values.deleteId}`
// 		);
// 		console.log(response);
// 	};
// 	return (
// 		<div>
// 			<div>
// 				<div>ID TO DELETE</div>
// 				<input
// 					type="text"
// 					placeholder="ID TO DELETE"
// 					{...register("deleteId")}
// 				/>
// 			</div>
// 			<Button
// 				className="w-[100px] h-[50px] mt-3"
// 				onClick={handleSubmit(handleDelete)}
// 			>
// 				{isSubmitting ? "..." : "DELETE"}
// 			</Button>
// 		</div>
// 	);
// };

// const EditSection = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { isSubmitting },
// 	} = useForm({
// 		defaultValues: {
// 			id: "",
// 			name: "",
// 			age: "",
// 			habits: "",
// 			friends: "",
// 			updateId: "",
// 		},
// 	});

// 	const handleUpadate = async (values) => {
// 		const API_POST =
// 			"https://docs.google.com/forms/d/e/1FAIpQLSegY4y5iT2Nywqxn9jt9hVbRVwItQFxpS3uViBWyTzEuFYR7w/formResponse";
// 		const formData = new FormData();

// 		formData.append("entry.2126560990", values.id);
// 		formData.append("entry.1026596653", values.name);
// 		formData.append("entry.964811420", values.age);
// 		formData.append("entry.948622883", values.habits);
// 		formData.append("entry.1043001156", values.updateId);

// 		const response = await fetch(API_POST, {
// 			method: "POST",
// 			body: formData,
// 			mode: "no-cors",
// 		});

// 		console.log(response);

// 		const API_DELETE =
// 			"https://script.google.com/macros/s/AKfycbxo3usUX03KYQInXoB62U04Qiu0CBWiTmcsCJWbNyIDPJAqjR-fCB7X0R93rjcCOEL1/exec";
// 		const response2 = await fetch(
// 			`${API_DELETE}?updateId=${values.updateId}`
// 		);

// 		console.log(response2);
// 	};
// 	return (
// 		<div>
// 			<div>
// 				<div>SET_ID</div>
// 				<input type="text" placeholder="SET_ID" {...register("id")} />
// 			</div>
// 			<div>
// 				<div>SET_NAME</div>
// 				<input
// 					type="text"
// 					placeholder="SET_NAME"
// 					{...register("name")}
// 				/>
// 			</div>
// 			<div>
// 				<div>SET_AGE</div>
// 				<input type="text" placeholder="SET_AGE" {...register("age")} />
// 			</div>
// 			<div>
// 				<div>SET_HABITS</div>
// 				<input
// 					type="text"
// 					placeholder="SET_HABITS"
// 					{...register("habits")}
// 				/>
// 			</div>
// 			<div>
// 				<div>SET_FRIENDS</div>
// 				<input
// 					type="text"
// 					placeholder="SET_FRIENDS"
// 					{...register("friends")}
// 				/>
// 			</div>
// 			<div>
// 				<div className="text-primaryColor">UPDATE TO ID</div>
// 				<input
// 					type="text"
// 					placeholder="UPDATE_TO_ID"
// 					{...register("updateId")}
// 				/>
// 			</div>
// 			<Button
// 				className="w-[100px] h-[50px] mt-3"
// 				onClick={handleSubmit(handleUpadate)}
// 			>
// 				{isSubmitting ? "..." : "UPDATE"}
// 			</Button>
// 		</div>
// 	);
// };

// const UploadImageSection = () => {
// 	const [img, setImg] = useState("");
// 	const inputRef = useRef(null);
// 	const [loading, setLoading] = useState(false);

// 	const handleUploadImg = async () => {
// 		let url =
// 			"https://script.google.com/macros/s/AKfycbz0A8fCM5DwN2oT2RoEQufhUneOVUMmyva2IGJckFfKHM-sjYckFh8GJ1O68xS9QT6BuQ/exec";
// 		const file = inputRef.current.files[0];
// 		if (!file) return inputRef.current.click();
// 		const reader = new FileReader();
// 		reader.readAsDataURL(file);
// 		reader.onloadend = () => {
// 			const data = reader.result.split(",")[1];
// 			let obj = {
// 				base64: data,
// 				name: file.name,
// 				size: file.size,
// 				type: file.type,
// 			};
// 			setLoading(true)
// 			fetch(url, {
// 				method: "POST",
// 				body: JSON.stringify(obj),
// 			})
// 				.then((r) => r.json())
// 				.then((data) => {
// 					setImg(data.link)
// 					console.log(data);
// 					setLoading(false);
// 				});
// 		};
// 	};

// 	async function postFile(postData) {
// 		try {
// 			setLoading(true);
// 			const response = await fetch(
// 				`https://script.google.com/macros/s/AKfycbyM6q-Ufi1f27wVP5IpbNhMvOJnu3UJs2kDajsSt1_WncCM3u1p0x7Qw2KiNcImmM2U/exec`,
// 				{
// 					method: "POST",
// 					credentials: "include",
// 					// mode: "no-cors",
// 					body: JSON.stringify(postData),
// 				}
// 			);
// 			const data = await response.json();
// 			setImg(data.link)
// 			console.log("data", data);
// 			setLoading(false);
// 		} catch (error) {
// 			console.error("Error: ", error);
// 			// alert("もう一度やり直ししてください！");
// 			setLoading(false);
// 		}
// 	}

// 	return (
// 		<div>
// 			<p className="mb-1">UPLOAD_IMAGE</p>
// 			<div className="flex items-center justify-center w-4/5 p-4 mx-auto mb-4 border border-gray-200 aspect-square">
// 				{img && (
// 					<img src={img} alt="" className="object-contain w-full" />
// 				)}
// 			</div>
// 			<input ref={inputRef} type="file" />
// 			<Button className="mx-auto mt-3" onClick={handleUploadImg}>
// 				{loading ? "..." : "UPLOAD"}
// 			</Button>
// 		</div>
// 	);
// }; // Đóng hàm ở đây


