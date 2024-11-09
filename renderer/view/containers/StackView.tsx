import React from "react";
import { IRenderable } from "../../types/protocols";
import Renderer from "../renderers/Renderer";
import { Nullable } from "Sudojo";

const StackView: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
	columns?: number;
}> = ({ renderable, asScreen, isDarkMode, columns = 4 }) => {
	const view = renderable?.withView(asScreen);
	let children: Nullable<IRenderable[]> = view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}

	return (
		<div style={styles.container}>
			{children.map((child, index) => (
				<Renderer
					key={child.id}
					renderable={child}
					asScreen={false}
					isDarkMode={isDarkMode}
				/>
			))}
		</div>
	);
};

// Styles for the UIStackView component
const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between", // Equal spacing between items
		alignItems: "center", // Vertically align text in the middle
		width: "100%", // You can adjust the width as needed
	} as React.CSSProperties,
	textItem: {
		padding: "0 10px", // Optional padding
		fontSize: "16px", // You can adjust font size
	} as React.CSSProperties,
};

export default StackView;
