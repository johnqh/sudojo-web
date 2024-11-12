// src/index.tsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./components/AuthContext";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.render(
	<React.StrictMode>
		<Theme>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Theme>
	</React.StrictMode>,
	document.getElementById("root")
);
