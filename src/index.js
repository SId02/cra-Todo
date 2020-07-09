import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bulma/css/bulma.css";
import "./index.css";
import ToDo from "./ToDo";
ReactDOM.render(
	<React.StrictMode>
		<ToDo/>
	</React.StrictMode>,
	document.getElementById("root")
);

