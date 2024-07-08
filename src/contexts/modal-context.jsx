import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openModal = (content) => {
		setModalContent(content);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
	};

	const values = {
		isOpen,
		openModal,
		closeModal,
		modalContent,
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
