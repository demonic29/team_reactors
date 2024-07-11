import axios from "axios";
import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { API } from "utils/end_points";

const CompanySection = () => {
	const [company, setCompany] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getAbout = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${API.GET_DATA}?action=getAbout`
				);
				setCompany(data?.data?.company);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getAbout();
	}, []);

	if (loading) return <Skeleton />;

	return (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">会社概要</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				<SectionImage src={company?.image} alt="about-company-img" />
				<div className="mt-4 text-lg">{company?.content}</div>
			</div>
		</SectionContainer>
	);
};

function Skeleton() {
	return (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">会社概要</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				<SectionImage className="skeleton" />
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="h-4 mt-4 text-lg skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default CompanySection;
