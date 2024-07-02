import React from "react";
import SectionTitle from "../../components/managerPage/SectionTitle";
import { FiEdit } from "react-icons/fi";

const ManagerAboutPage = () => {
	const companyImages = [
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
	];

	return (
		<div className="grid flex-1 grid-cols-3 gap-4 2xl:grid-cols-2">
			{/* Col 1  */}
			<div>
				<SectionContainer>
					<SectionTitle>バナー</SectionTitle>
					<SectionImage
						src="https://i.pinimg.com/564x/0b/6f/af/0b6faf498a80c50c9bcaf46c58b787e0.jpg"
						alt="about-banner"
					>
						<div className="absolute inset-0 flex items-center justify-center transition-all bg-black opacity-0 bg-opacity-20 group-hover:opacity-100">
							<span className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full">
								<FiEdit size={35} color="white"></FiEdit>
							</span>
						</div>
					</SectionImage>
				</SectionContainer>
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社へのアクセス
						</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						{/* Map  */}
						<div className="w-full h-[300px] rounded-md overflow-hidden mb-4 relative group">
							<div className="absolute inset-0 z-10 flex items-center justify-center transition-all bg-black opacity-0 cursor-default group-hover:opacity-100 bg-opacity-40">
								<span className="text-lg font-semibold text-white">
									見るだけ
								</span>
							</div>
							<iframe
								src="https://www.google.com/maps/d/u/0/embed?mid=1sp_iuTX6MJCBDIFilElFruxcrB7Pqjw&ehbc=2E312F&noprof=1"
								width="100%"
								height="280"
								title="company-location"
							></iframe>
						</div>
						{/* Station  */}
						<div className="flex flex-wrap gap-2 mb-4 text-lg">
							{[
								"博多駅から３分徒歩",
								"大阪梅田から６分徒歩",
								"大阪梅田から６分徒歩",
							].map((item, index) => (
								<div
									key={index}
									className="px-4 py-2 gap-3 border-l-[3px] whitespace-nowrap flex-1 border-l-secondaryColor"
								>
									{item}
								</div>
							))}
						</div>
						{/* Note  */}
						<div className="mt-4 text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odit iure placeat maxime dolorem dolores ullam
							amet accusamus laborum architecto possimus!
						</div>
					</div>
				</SectionContainer>
			</div>
			{/* Col 2  */}
			<div>
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社概要
						</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						<SectionImage
							src="https://i.pinimg.com/564x/af/6b/c4/af6bc40ad25389c74d0ea0afcaf6068d.jpg"
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">
							会社名（事業名）：「歴てく」 ~ INSIDE（いんさいど）
							<br />
							成立：2024/05/20
							<br />
							住所：福岡市西区横浜３丁目２７－１５
							<br />
							連絡先：０９０－２３９５－２４２７
							<br />
							問い合わせメールアドレス：rekiteku2024@icloud.com
						</div>
					</div>
				</SectionContainer>
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社概要
						</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{companyImages &&
							companyImages.length > 0 &&
							(companyImages.length > 8
								? companyImages
										.slice(0, 8)
										.map((item, index) => (
											<div
												key={index}
												className="overflow-hidden rounded-md aspect-square"
											>
												<img
													src="https://i.pinimg.com/564x/66/e7/88/66e78802fc81839141d8c6f4fe343bc1.jpg"
													alt="company-img"
													className="object-cover object-center w-full h-full"
												/>
											</div>
										))
								: companyImages.map((item, index) => (
										<div
											key={index}
											className="rounded-md aspect-square"
										>
											<img
												src="https://i.pinimg.com/564x/66/e7/88/66e78802fc81839141d8c6f4fe343bc1.jpg"
												alt="company-img"
												className="object-cover object-center w-full h-full"
											/>
										</div>
								  )))}
						{companyImages && companyImages.length > 8 && (
							<div className="flex items-center justify-center border border-gray-200 rounded-md cursor-pointer group hover:opacity-60">
								<span className="text-3xl text-gray-300 transition-all group-hover:text-gray-600 group-hover:scale-110">{`+${companyImages.length - 8}`}</span>
							</div>
						)}
					</div>
				</SectionContainer>
			</div>
			{/* Col 3  */}
			<div>
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">理念</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						<SectionImage
							src="https://i.pinimg.com/736x/b6/59/ab/b659ab1befc5d0d1dea398d18c7f8624.jpg"
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">
							歴史は人が生きていくための教科書。栄養剤です。いにしえの人物それぞれが歩んだ足跡を訪ね、遺構や文物を目にすると、生き方の助けになる「発見」があります。また、地域の過去~現在にわたる史跡を巡り、通史を知れば、その地域の「個性」が見えてきます。
							有名、無名の史跡をてくてくと歩き、「今後の人生の糧」や「地域のより深い魅力」を見つけませんか。
						</div>
					</div>
				</SectionContainer>
			</div>
		</div>
	);
};

const SectionImage = ({
	className = "",
	imgClassName = "",
	src = "",
	alt = "image",
	children,
}) => {
	return (
		<div
			className={`w-full h-[300px] rounded-md relative overflow-hidden group ${className}`}
		>
			{children}
			<img
				src={src}
				alt={alt}
				className={`object-cover object-center w-full h-full ${imgClassName}`}
			/>
		</div>
	);
};

const EditButton = ({ children = "編集", onClick = () => {} }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-primaryColor"
		>
			<FiEdit size={20} />
			<span>{children}</span>
		</button>
	);
};

const SectionContainer = ({ children }) => {
	return (
		<div className="p-4 mb-4 border border-gray-200 rounded-xl h-fit">
			{children}
		</div>
	);
};

export default ManagerAboutPage;
