import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "./contexts/modal-context";
import { ApiProvider } from "contexts/managerPage/api-context";
import { AuthProvider } from "contexts/auth-context";
import { DataProvider } from "contexts/managerPage/data-context";

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<DataProvider>
				<ApiProvider>
					<ModalProvider>
						<DndProvider backend={HTML5Backend}>
							<BrowserRouter>
								<App /> {/* App Component */}
								<ToastContainer
									position="top-center"
									autoClose={3000}
									hideProgressBar={true}
									newestOnTop={true}
									rtl={false}
									pauseOnHover={false}
									theme="light"
									transition={Slide}
								/>
							</BrowserRouter>
						</DndProvider>
					</ModalProvider>
				</ApiProvider>
			</DataProvider>
		</AuthProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


