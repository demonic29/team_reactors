import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";

const ManagerNotePage = () => {
	const { data, loading } = useApi();
	const notes = data?.notes || [];

	return (
		<div className="w-full">
			<SectionTitle>ノードマネジャー</SectionTitle>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<div className="grid grid-cols-4 gap-2">
					{notes.length > 0 &&
						notes.map((note) => (
							<div key={note.noteId} className="relative group">
								<span className="absolute group-hover:visible cursor-pointer grid place-items-center bg-white border border-gray-200 rounded-full invisible shadow-sm -right-1.5 -top-0.5 size-6">
									<HiMiniXMark size={20} />
								</span>
								<div
									className="h-[195px]"
									dangerouslySetInnerHTML={{
										__html: `${note.iframe}`,
									}}
								></div>
							</div>
						))}
				</div>
			)}
		</div>
	);
};

const Skeleton = () => {
	return (
		<div className="grid grid-cols-4 gap-2">
			<div className="h-[196px] w-full border border-gray-200 p-2 rounded-lg">
				<div className="flex h-full gap-3">
					<div className="flex flex-col justify-between flex-1 py-2">
						<div>
							<div className="w-full h-6 mb-2 skeleton"></div>
							<div className="w-2/3 h-4 mb-1 skeleton"></div>
							<div className="w-1/2 h-4 skeleton"></div>
						</div>
						<div className="flex gap-2">
							<div className="rounded-full size-10 skeleton"></div>
							<div className="flex-1">
								<div className="w-1/4 h-4 mb-2 rounded-md size-10 skeleton"></div>
								<div className="w-1/6 h-3 rounded-md size-10 skeleton"></div>
							</div>
						</div>
					</div>
					<div className="w-[100px] h-[60px] skeleton"></div>
				</div>
			</div>
		</div>
	);
};

export default ManagerNotePage;
