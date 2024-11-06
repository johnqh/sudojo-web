import React from "react";
import { IRenderable } from "../types/protocols";
import ViewControllerMapping from "./ViewControllerMapping";
import { Nullable } from "Sudojo";

const ViewController: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	currentId?: Nullable<string>;
}> = ({ renderable, isDarkMode, currentId }) => {
	console.log("ViewController: " + renderable);

	const containerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%", // Full vertical height
	};

	const Component = ViewControllerMapping.shared?.get(
		renderable?.screen?.screenLayout
	);

	if (!Component) {
		return null;
	}

	return <Component renderable={renderable} isDarkMode={isDarkMode} currentId={currentId} />;
};

export default ViewController;
