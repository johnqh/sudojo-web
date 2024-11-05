import React from "react";
import { IRenderable } from "../../../types/protocols";
import Renderer from "../renderers/Renderer";
import { Nullable } from "Sudojo";

const StackView: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	let children = renderable?.view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}
	return (
		<div style={styles.container}>
			{children.map((child, index) => (
				<Renderer
					key={child.id}
					renderable={child}
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
