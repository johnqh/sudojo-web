import React from "react";
import { IRenderable } from "../../types/protocols";
import NavigationBreadcrumbs from "../view/containers/NavigationBreadcrumbs";
import UIColor from "../../injections/renderers/utils/UIColor";
import { Nullable } from "Sudojo";
import ViewController from "./ViewController";

const UINavigationController: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	currentId?: Nullable<string>;
}> = ({ renderable, isDarkMode, currentId }) => {
	console.log("UINavigationController: " + renderable);

	if (!currentId) {
		return null;
	}
	const display = renderable?.findById(currentId);
	if (!display) {
		return null;
	}

	const containerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%", // Full vertical height
		backgroundColor: UIColor(false).secondarySystemBackground,
	};

	return (
		<div style={containerStyle}>
			<NavigationBreadcrumbs renderable={renderable} />
			<ViewController
				renderable={display}
				isDarkMode={isDarkMode}
				currentId={currentId}
			/>
		</div>
	);
};

export default UINavigationController;
