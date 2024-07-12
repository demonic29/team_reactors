import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle";
import Button from "../../buttons/Button";
import ReactQuill from "react-quill";
import { FiEdit } from "react-icons/fi";
import 'react-quill/dist/quill.snow.css';

const AddTourModalStyle = styled.div`
	.ql-editor p {
		font-size: 18px;
	}
`;

const AddTourModal = () => {
	const [value, setValue] = useState("");
	const [selectedImages, setSelectedImages] = useState([]);

	const handleSelectImages = (e) => {
		const files = Array.from(e.target.files);
		const newImages = [];
		const totalImages = selectedImages.length + files.length;

		if (totalImages > 4) {
			Swal.fire("4枚まで選択できます!");
			return;
		}

		files.forEach((file) => {
			const reader = new FileReader();
			reader.onloadend = () => {
				newImages.push(reader.result);

				if (newImages.length === files.length) {
					setSelectedImages((prevImages) => [
						...prevImages,
						...newImages,
					]);
				}
			};
			reader.readAsDataURL(file);
		});
	};

	return (
		<AddTourModalStyle>
			<div className="sticky top-0 left-0 w-full bg-white">
				<SectionTitle>新規ツアー</SectionTitle>
			</div>

			<div>
				<div className="w-[50%] group relative aspect-[10/6] rounded-md overflow-hidden mx-auto mt-4 mb-8">
					<div className="overlay">
						<span className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full">
							<FiEdit size={35} color="white"></FiEdit>
						</span>
					</div>
					<img
						src="https://i.pinimg.com/736x/e0/af/ee/e0afee147e8e0f439a7f8a82fe604292.jpg"
						alt="tour-banner"
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div className="mb-4">
					<Label id="title" required>
						タイトル：
					</Label>
					<Input id="title"></Input>
				</div>
				<div className="mb-4">
					<Label id="shortDesc">短文説明：</Label>
					<Input id="shortDesc"></Input>
				</div>
				<div className="mb-4">
					<Label id="desc" required>
						説明：
					</Label>
					<ReactQuill theme="snow" value={value} onChange={setValue} />
				</div>
				<div className="mb-4">
					<Label id="price" required>
						プライス：
					</Label>
					<Input id="price" className="w-[100px]"></Input>
					<span className="ml-2 text-xl">¥</span>
				</div>

				{/* Select image field  */}
				<div className="mb-4">
					<Label id="images" extendText="写真を4枚まで選択できます。">
						写真
					</Label>
					<input
						type="file"
						multiple
						onChange={(e) => handleSelectImages(e)}
					/>

					<div className="flex items-center gap-3 mt-4">
						{selectedImages &&
							selectedImages.length > 0 &&
							selectedImages.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`Selected ${index}`}
									className="size-[100px] rounded-md object-cover object-center"
								/>
							))}
						{selectedImages.length > 0 && (
							<Button
								onClick={() => setSelectedImages([])}
								className="px-2 py-0.5 hover:bg-white bg-white border border-primaryColor text-primaryColor"
							>
								全て取り消す
							</Button>
						)}
					</div>
				</div>

				{/* Add locations field  */}
				<div className="mb-4">
					
				</div>
			</div>
		</AddTourModalStyle>
	);
};

const Label = ({
	id = "",
	children = "Empty label",
	className = "",
	required = false,
	extendText = "",
	...props
}) => {
	return (
		<div className="flex mb-2">
			<label htmlFor={id} className={`shrink-0 ${className}`} {...props}>
				{children}
			</label>
			{required && (
				<span className="mt-1 text-xs text-red-500 ">（必須）</span>
			)}
			{extendText && (
				<span className="ml-3 text-gray-500">{` (${extendText}) `}</span>
			)}
		</div>
	);
};

const Input = ({ placeholder = "入力", id = "", className = "", ...props }) => {
	return (
		<input
			type="text"
			id={id}
			placeholder={placeholder}
			className={`px-3 py-1.5 border w-full border-gray-300 rounded-md outline-primaryColor ${className}`}
			{...props}
		/>
	);
};

export default AddTourModal;
