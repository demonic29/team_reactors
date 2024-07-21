import FiEdit from "components/managerPage/icons/FiEdit";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useFileChange } from "hooks/useFileChange";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import QuillEditor from "react-quill";
import { GoPlus } from "react-icons/go";
import { HiMiniXMark } from "react-icons/hi2";
import { LiaPaperPlaneSolid } from "react-icons/lia";
import AddButton from "components/managerPage/buttons/AddButton";
import { Link } from "react-router-dom";

const TourAddNewModal = () => {
	const [descValue, setDescValue] = useState();
	// Hook for banner change
	const { file, filePreview, handleFileChange, setFilePreview } =
		useFileChange();
	// Hook for tour image change
	const {
		file: file1,
		filePreview: filePreview1,
		handleFileChange: handleFileChange1,
		setFilePreview: setFilePreview1,
		setFile: setFile1,
	} = useFileChange();

	const {
		file: file2,
		filePreview: filePreview2,
		handleFileChange: handleFileChange2,
		setFilePreview: setFilePreview2,
		setFile: setFile2,
	} = useFileChange();
	const {
		file: file3,
		filePreview: filePreview3,
		handleFileChange: handleFileChange3,
		setFilePreview: setFilePreview3,
		setFile: setFile3,
	} = useFileChange();
	const {
		file: file4,
		filePreview: filePreview4,
		handleFileChange: handleFileChange4,
		setFilePreview: setFilePreview4,
		setFile: setFile4,
	} = useFileChange();

	const initMap = `<iframe src="https://www.google.com/maps/d/u/1/embed?mid=1nIy4OvAZ4RIMF624Zknzy8ratWlrD8Y&ehbc=2E312F" width="640" height="480"></iframe>`;
	const [map, setMap] = useState(initMap);

	const inputFileRef = useRef();
	const [tourTypeOption, setTourTypeOption] = useState(
		tourTypeOptions[0].name
	);
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			title: "",
		},
	});

	const handleAddTour = async (values) => {};

	return (
		<div className="flex flex-col h-full">
			<SectionTitle>新規ツアー</SectionTitle>
			<div className="flex flex-col flex-1 gap-4 overflow-y-auto pb-[50px]">
				{/* Choose new tour banner image  */}
				<div className="h-[300px] shrink-0 aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
					<div className="overlay">
						<label
							htmlFor="choose-tour-banner-img"
							className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
						>
							<FiEdit size={35} color="white" />
							<input
								type="file"
								ref={inputFileRef}
								onChange={(e) => handleFileChange(e)}
								className="hidden"
								id="choose-tour-banner-img"
							/>
						</label>
					</div>
					{filePreview ? (
						<img
							src={filePreview}
							alt="company-img"
							className="object-cover object-center w-full h-full"
						/>
					) : (
						<div className="flex items-center justify-center w-full h-full bg-gray-300">
							<span className="transition-all group-hover:hidden">
								写真がありません
							</span>
						</div>
					)}
				</div>

				{/* Form fields  */}
				<div className="flex flex-col flex-1 gap-6">
					{/* Title  */}
					<div>
						<ModalFieldTitle>タイトル</ModalFieldTitle>
						<input
							type="text"
							placeholder="タイトル"
							className="modal_input"
							{...register("title")}
						/>
					</div>

					{/* Short description  */}
					<div>
						<ModalFieldTitle>ショート説明</ModalFieldTitle>
						<textarea
							type="text"
							placeholder="タイトル"
							className="w-[98%] modal_input"
							{...register("shortDes")}
						/>
					</div>

					{/* Long description  */}
					<div>
						<ModalFieldTitle>説明</ModalFieldTitle>
						<div className="w-[98%]">
							<QuillEditor
								className=""
								theme="snow"
								value={descValue}
								onChange={(value) => setDescValue(value)}
							/>
						</div>
					</div>

					{/* Tour type  */}
					<div>
						<ModalFieldTitle>ツァーのタイプ</ModalFieldTitle>
						<div className="flex gap-4">
							{tourTypeOptions.map((type) => (
								<div
									onClick={() => setTourTypeOption(type.name)}
									key={type.id}
									className={`px-4 py-2 border-[1.5px] rounded-md cursor-pointer transition-all ${
										tourTypeOption === type.name
											? "border-primaryColor bg-primaryColor text-white"
											: "border-gray-300"
									}`}
								>
									<span>{type.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Price  */}
					<div>
						<ModalFieldTitle>値段</ModalFieldTitle>
						<div className="flex items-center gap-2">
							<input
								type="text"
								placeholder="値段"
								className="w-[100px] modal_input text-right"
								{...register("price")}
							/>
							<span className="text-xl text-gray-400">¥</span>
						</div>
					</div>

					{/* image list  */}
					<div>
						<ModalFieldTitle>画像一覧</ModalFieldTitle>
						<div className="flex gap-4">
							<PickImage
								index={1}
								filePreview={filePreview1}
								handleFileChange={handleFileChange1}
								setFile={setFile1}
								setFilePreview={setFilePreview1}
							></PickImage>
							<PickImage
								index={2}
								filePreview={filePreview2}
								handleFileChange={handleFileChange2}
								setFile={setFile2}
								setFilePreview={setFilePreview2}
							></PickImage>
							<PickImage
								index={3}
								filePreview={filePreview3}
								handleFileChange={handleFileChange3}
								setFile={setFile3}
								setFilePreview={setFilePreview3}
							></PickImage>
							<PickImage
								index={4}
								filePreview={filePreview4}
								handleFileChange={handleFileChange4}
								setFile={setFile4}
								setFilePreview={setFilePreview4}
							></PickImage>
						</div>
					</div>

					{/* Plan  */}
					<div>
						<ModalFieldTitle>プラン</ModalFieldTitle>
						<div className="pl-16">
							{/* Plan 1 is default  */}
							<div>
								{/* plan day  */}
								<div className="flex items-center gap-2 mb-4">
									<span className="text-primaryColor">
										<LiaPaperPlaneSolid size={20} />
									</span>
									<span className="text-xl font-bold text-nowrap">
										１日目
									</span>
								</div>

								{/* plan input field  */}
								<div className="flex flex-col gap-4 pl-10">
									<div>
										<div className="h-[260px] w-[540px] rounded-md relative overflow-hidden group mb-8">
											<div className="overlay">
												<Link
													to={
														"https://www.google.com/maps/d/"
													}
													target="_blank"
													className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
												>
													<FiEdit
														size={35}
														color="white"
													/>
												</Link>
											</div>
											<div
												dangerouslySetInnerHTML={{
													__html: `${map}`,
												}}
											></div>
										</div>
										<div className="flex items-center">
											<h5 className="font-bold w-28">
												ルート
											</h5>
											<input
												type="text"
												placeholder={map}
												onChange={(e) => setMap(e.target.value)}
												className="modal_input"
											/>
										</div>
									</div>

									{/* start  */}
									<div className="flex items-center">
										<h5 className="font-bold w-28">
											スタート
										</h5>
										<input
											type="text"
											placeholder="スタート場所"
											className="modal_input"
										/>
									</div>
									{/* destination  */}
									<div className="flex w-full">
										<h5 className="mt-1 font-bold w-28 shrink-0">
											観光地
										</h5>
										<ul className="flex flex-col flex-1">
											<li className="mb-4">
												<input
													type="text"
													placeholder="観光地"
													className="modal_input"
												/>
											</li>
											<li className="mb-4">
												<input
													type="text"
													placeholder="観光地"
													className="modal_input"
												/>
											</li>
											<div className="pl-2">
												<AddButton>追加</AddButton>
											</div>
										</ul>
									</div>
									{/* end  */}
									<div className="flex items-center">
										<h5 className="font-bold w-28">
											エンド
										</h5>
										<input
											type="text"
											placeholder="エンド場所"
											className="modal_input"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Location  */}

					{/* Feedback  */}
				</div>
			</div>
			<ModalFooter
				buttonContent="作成"
				buttonOnClick={handleSubmit(handleAddTour)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

const PickImage = ({
	index,
	filePreview,
	handleFileChange,
	setFile,
	setFilePreview,
}) => {
	const deleteInputedFile = () => {
		setFile(null);
		setFilePreview(null);
	};

	return (
		<div className="h-[90px] relative aspect-[5/3] overflow-hidden rounded border group  cursor-pointer border-gray-200">
			{filePreview ? (
				<>
					<div
						onClick={() => deleteInputedFile()}
						className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 opacity-0 cursor-pointer group-hover:opacity-100 group-hover:bg-opacity-30"
					>
						<HiMiniXMark size={30} color="white" />
					</div>
					<img
						src={filePreview}
						alt="tour-img"
						className="object-cover object-center w-full h-full cursor-pointer"
					/>
				</>
			) : (
				<>
					<label
						htmlFor={`choose-${index}-img`}
						className="absolute flex items-center justify-center w-full h-full cursor-pointer"
					>
						<GoPlus
							size={40}
							className="text-gray-300 transition-all group-hover:text-gray-400 group-hover:scale-105"
						/>
						<input
							type="file"
							onChange={(e) => handleFileChange(e)}
							className="hidden"
							id={`choose-${index}-img`}
						/>
					</label>
				</>
			)}
		</div>
	);
};

const tourTypeOptions = [
	{ id: 1, name: "日帰り" },
	{ id: 2, name: "2日1泊" },
	{ id: 3, name: "2日2泊" },
	{ id: 4, name: "3日2泊" },
	{ id: 5, name: "3日3泊" },
	{ id: 6, name: "その他" },
];

export default TourAddNewModal;
