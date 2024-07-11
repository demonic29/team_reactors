import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "utils/end_points";
import SectionTitle from "components/managerPage/SectionTitle";
import Button from "components/buttons/Button";

const AboutSection = () => {
	const [homeAbout, setHomeAbout] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getHomeAbout = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${API.GET_DATA}?action=getAbout`
				);
				setHomeAbout(data.data.homePage);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getHomeAbout();
	}, []);

	const { image, content } = homeAbout;

	return (
		<div className="mb-10">
			<SectionTitle className={"mb-3"}>アバウト</SectionTitle>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<div className="flex gap-8">
					<div className="w-[300px] h-[200px] rounded-lg overflow-hidden">
						<img
							src={image}
							alt="about-image"
							className="object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
						<p className="mb-4">{content}</p>
						<Button className={"px-6 py-[6px]"}>編集</Button>
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
