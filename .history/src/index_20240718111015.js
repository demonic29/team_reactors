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
import { ApiProvider } from "contexts/managerPage/api-context";
import { AuthProvider } from "pages/context/AuthContext";

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <ModalProvider>
        <DndProvider backend={HTML5Backend}>
          <AuthProvider>
            <BrowserRouter>
              <App /> {/* App Component */}
              <ToastContainer />
            </BrowserRouter>
          </AuthProvider>
        </DndProvider>
      </ModalProvider>
    </ApiProvider>
  </React.StrictMode>
);

function doGet(e) {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({message: "Hello, world"}));
  output.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  output.setHeader("Access-Control-Allow-Methods", "GET, POST");
  output.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return output;
}
doGet();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();