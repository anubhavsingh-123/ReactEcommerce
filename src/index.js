import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {AppProvider} from "./Context/Productcontext"
import { FilterContextProvider } from "./Context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<AppProvider>
<FilterContextProvider>
<App />
</FilterContextProvider>
</AppProvider>
);

