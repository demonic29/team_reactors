import { FiEdit } from "react-icons/fi";

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

export default EditButton;
