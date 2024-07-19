import React, {  } from "react";
import SectionTitle from "components/managerPage/SectionTitle";
import Button from "components/buttons/Button";
import { useModal } from "contexts/modal-context";
import HomeAboutEditModal from "modules/managerPage/modals/home/HomeAboutEditModal";
import { useData } from "contexts/managerPage/data-context";

const AboutSection = () => {
	const { openModal } = useModal();
	const {data, loading} = useData()

	const homeAbout = data?.about?.homeAbout || {}

	return (
		<div className="mb-10">
			<SectionTitle className={"mb-3"}>アバウト</SectionTitle>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<div className="flex gap-8">
					<div className="w-[300px] h-[200px] rounded-lg overflow-hidden">
						<img
							src={homeAbout?.image?.downloadURL}
							alt="about-image"
							className="object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
						<div className="mb-4" dangerouslySetInnerHTML={{__html: `${homeAbout?.content}`}}></div>
						<Button
							className={"px-6 py-[6px]"}
							onClick={() => openModal(<HomeAboutEditModal homeAbout={homeAbout} />)}
						>
							編集
						</Button>
						{/* <Button onClick={AddData}>add data</Button> */}
					</div>
				</div>
			)}
		</div>
	);
};

function Skeleton() {
	return (
		<div className="mb-10">
			<div className="flex gap-8">
				<div className="w-[300px] skeleton h-[200px] rounded-lg overflow-hidden"></div>
				<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
					<div className="h-6 mb-4 skeleton"></div>
					<div className="h-6 mb-4 skeleton"></div>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
