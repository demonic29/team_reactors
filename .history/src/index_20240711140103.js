import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "./contexts/modal-context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ModalProvider>
			<DndProvider backend={HTML5Backend}>
				<BrowserRouter>
					<App /> {/* App Component  */}
					<ToastContainer />
				</BrowserRouter>
			</DndProvider>
		</ModalProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if('serviceWorer' in navigator){
	navigator.serviceWorker.ready.then(registration => {
		registration.unregister();
	})
}
