import React from "react";
import SectionTitle from "components/managerPage/SectionTitle";
import Button from "components/buttons/Button";
import { useApi } from "contexts/managerPage/api-context";
import { useModal } from "contexts/modal-context";
import HomeAboutModal from "modules/managerPage/modals/home/HomeAboutModal";

const AboutSection = ({ homeAbout }) => {
	const { loading } = useApi();
	const { openModal } = useModal();

	return (
		<div className="mb-10">
			<SectionTitle className={"mb-3"}>アバウト</SectionTitle>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<div className="flex gap-8">
					<div className="w-[300px] h-[200px] rounded-lg overflow-hidden">
						<img
							src={homeAbout?.image}
							alt="about-image"
							className="object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
						<p className="mb-4">{homeAbout?.content}</p>
						<Button
							className={"px-6 py-[6px]"}
							onClick={() =>
								openModal(
									<HomeAboutModal homeAbout={homeAbout} />
								)
							}
						>
							編集
						</Button>
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
