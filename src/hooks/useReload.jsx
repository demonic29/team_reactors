import { useState } from "react";

export const useReload = () => {
	const [reload, setReload] = useState(false);

	const reloadData = () => {
		setReload(!reload);
	};

	return { reload, reloadData };
};
