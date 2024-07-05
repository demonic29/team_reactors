import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children, ...props }) => {
	const [openModal, setOpenModal] = useState(false);
	const toggleModal = () => {
		setOpenModal(!openModal);
	};
	const values = {
		openModal,
		toggleModal,
	};

	return (
		<ModalContext.Provider value={values} {...props}>
			{children}
		</ModalContext.Provider>
	);
};

const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export { ModalProvider, useModal };
