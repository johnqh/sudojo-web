import React from "react";
import { IRenderable } from "../../../types/protocols";
import ViewControllerMapping from "./ViewControllerMapping";
import { Nullable } from "Sudojo";

const ViewController: React.FC<{
	renderable?: Nullable<IRenderable>;
	currentId?: Nullable<string>;
}> = ({ renderable, currentId }) => {
	console.log("ViewController: " + renderable);

	const containerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%", // Full vertical height
	};

	const Component = ViewControllerMapping.shared?.get(
		renderable?.screen?.view?.layout
	);

	if (!Component) {
		return null;
	}

	return <Component renderable={renderable} currentId={currentId} />;
};

export default ViewController;
