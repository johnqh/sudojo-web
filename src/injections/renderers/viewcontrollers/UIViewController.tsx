import React from "react";
import { Renderable } from "../../../types/protocols";
import Renderer from "../views/Renderer";
import RendererMapping from "../views/ViewMapping";
import Screen from "../../../state/injections/Screen";
import UIColor from "../utils/UIColor";
import { Box } from "@mui/material";

const UIViewController: React.FC<{ renderable?: Renderable | null }> = ({
	renderable,
}) => {
	console.log("UIViewController: " + renderable);

	const containerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		backgroundColor: UIColor(false).systemBackground,
	};

	const Component = RendererMapping.shared?.get(
		renderable?.display?.presentation?.asScreen?.view?.layout
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
