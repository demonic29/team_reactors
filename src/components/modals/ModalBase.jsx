import React from "react";
import { createPortal } from "react-dom";

const ModalBase = ({ openModal, children }) => {
	if (!openModal) return null;
	return openModal && createPortal(<div>{children}</div>, document.body);
};

export default ModalBase;
