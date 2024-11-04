import React from "react";
import { IRenderable } from "../../../types/protocols";
import RendererMapping from "../views/ViewMapping";
import UIColor from "../utils/UIColor";
import { Box } from "@mui/material";
import { Nullable } from "Sudojo";

const UIViewController: React.FC<{
	renderable?: Nullable<IRenderable>;
	currentId?: Nullable<string>;
}> = ({ renderable }) => {
	console.log("UIViewController: " + renderable);

	const containerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		backgroundColor: UIColor(false).systemBackground,
	};

	const Component = RendererMapping.shared?.get(
		renderable?.screen?.view?.layout
	);

	if (!Component) {
		return null;
	}
	return (
		<Box style={containerStyle}>
			<Component renderable={renderable} />
		</Box>
	);
};

export default UIViewController;
