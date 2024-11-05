import React from "react";
import { IRenderable } from "../../types/protocols";
import UIColor from "../../injections/renderers/utils/UIColor";
import { Box } from "@mui/material";
import { Nullable } from "Sudojo";
import ViewMapping from "../view/ViewMapping";

const UIViewController: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	currentId?: Nullable<string>;
}> = ({ renderable, isDarkMode, currentId }) => {
	console.log("UIViewController: " + renderable);

	const containerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		backgroundColor: UIColor(false).systemBackground,
	};

	const Component = ViewMapping.shared?.get(
		renderable?.screen?.view?.layout
	);

	if (!Component) {
		return null;
	}
	return (
		<Box style={containerStyle}>
			<Component renderable={renderable} isDarkMode={isDarkMode} />
		</Box>
	);
};

export default UIViewController;
