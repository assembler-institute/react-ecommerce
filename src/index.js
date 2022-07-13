//* Connects index.html with the Doom root "<div id="root"></div>" and renderize the Router Component.
//? We renderize here the Router Component.

import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<NextUIProvider>
		<Router />
	</NextUIProvider>,
);
