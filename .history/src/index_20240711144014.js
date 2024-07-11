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
import CacheBuster from "react-cache-buster";
import version from "../package.json";
import packageFile from "../package.json";


const root = ReactDOM.createRoot(document.getElementById("root"));
const isProduction = process.env.NODE_ENV === 'production';
const { version } = packageFile;
root.render(
	<CacheBuster
		currentVersion={version}
		isEnabled={isProduction} //If false, the library is disabled.
		isVerboseMode={false} //If true, the library writes verbose logs to console.
		// loadingComponent={<Loading />} //If not pass, nothing appears at the time of new version check.
		metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
	>
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
</CacheBuster>
	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// serviceWorker.unregister();
// const script = document.createElement('script');
// script.src = `/path/to/src/script.js?v=${new Date().getTime()}`;
// document.body.appendChild(script);
