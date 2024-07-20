import React from "react";
import { toast } from "react-toastify";

const ManagerPracticePage = () => {
	const data = {
		homeAbout: {
			image: {
				name: "7e2465be70c242661b66806f5baba862.jpg",
				downloadURL:
					"https://firebasestorage.googleapis.com/v0/b/rekiteku-2024.appspot.com/o/images%2F7e2465be70c242661b66806f5baba862.jpg?alt=media&token=22635500-288c-414f-99aa-1d4922b8ebee",
			},
			content:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quaerat voluptatem ipsa perferendis! Eos nobis dolorem deleniti et. Dolorum, quis.",
		},
		owner: {
			name: "Rekite",
			introduce:
				"一穂ミチさん初の犯罪小説集『ツミデミック』の直木賞ノミネートを記念し、第一話「違う羽の鳥」を特別全文公開します！是非この機会にご一読ください。パンデミック×“犯罪”を描いた大注目の傑作集をお見逃しなく！",
			image: {
				downloadURL:
					"https://i.pinimg.com/564x/93/18/8f/93188f3384eb080b0c93ce5ad0d1c8ae.jpg",
				name: "yoshimaru.jpg",
			},
			accessLink: "https://note.com/yamabi_howa/n/n093834af421f",
			buttonContent: "ノートへ",
		},
		banner: {
			name: "img10.webp",
			downloadURL:
				"https://firebasestorage.googleapis.com/v0/b/rekiteku-2024.appspot.com/o/images%2Fimg10.webp?alt=media&token=93fa06fb-84ca-4838-b194-baab40c04e1f",
		},
		company: {
			image: {
				downloadURL:
					"https://i.pinimg.com/736x/3f/ac/71/3fac710478f89d1a54d27b58c8a23d9f.jpg",
				name: "company_img.jpg",
			},
			content:
				"ブブラウザで実行され、ユーザーインターフェースを動的に操作するために使われます。HTMLやCSSと共に、インタラクティブなウェブページを作成するための重要な技術です。また、Node.jsを使えばサーバーサイドでも実行可能です。",
		},
		vision: {
			image: {
				downloadURL:
					"https://i.pinimg.com/564x/04/df/58/04df58ce2a1767a2c80c3fdf37dcdbda.jpg",
				name: "vision_img.jpg",
			},
			content:
				"歴史は人が生きていくための教科書。栄養剤です。いにしえの人物それぞれが歩んだ足跡を訪ね、遺構や文物を目にすると、生き方の助けになる「発見」があります。また、地域の過去~現在にわたる史跡を巡り、通史を知れば、その地域の「個性」が見えてきます。 有名、無名の史跡をてくてくと歩き、「今後の人生の糧」や「地域のより深い魅力」を見つけませんか。",
		},
		access: {
			map: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10QqdXqgN2QDRJgB2eTwiTQp8JT_759c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>',
			distance: [
				"博多駅から３分徒歩",
				"大阪梅田から６分徒歩",
				"大阪梅田から６分徒歩",
			],
			desc: "歴史は人が生きていくための教科書。栄養剤です。いにしえの人物それぞれが歩んだ足跡を訪ね、遺構や文物を目にすると、生き方の助けになる「発見」があります。",
		},
		companyImages: [
			{
				downloadURL:
					"https://i.pinimg.com/564x/30/a1/38/30a1387a9e10879bb676094053fd0a48.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/24/35/17/243517410327bb53e74f08e8c7371f7b.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/90/1e/f3/901ef38f9941923ec14e2e5bba40f56e.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/24/35/17/243517410327bb53e74f08e8c7371f7b.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/30/a1/38/30a1387a9e10879bb676094053fd0a48.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/24/35/17/243517410327bb53e74f08e8c7371f7b.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/90/1e/f3/901ef38f9941923ec14e2e5bba40f56e.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/30/a1/38/30a1387a9e10879bb676094053fd0a48.jpg",
				name: "company_img1.jpg",
			},
			{
				downloadURL:
					"https://i.pinimg.com/564x/90/1e/f3/901ef38f9941923ec14e2e5bba40f56e.jpg",
				name: "company_img1.jpg",
			},
		],
	};

	const handleAddData = async () => {
		try {
			// const docRef = doc(db, "general", "pageData");
			// await updateDoc(docRef, {
			// 	about: { ...data },
			// });

			// Add a new document with a generated id
			// const newCityRef = doc(collection(db, "tours"));
			// await setDoc(newCityRef, data);

			// ----------------------------------------------------------------
			toast.success("Successfully added");
		} catch (error) {
			console.log(error);
			toast.error("Error");
		}
	};

	return <div className="items-center justify-center flex-1">
		{/* <Button onClick={handleAddData}>Add Data</Button> */}
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
