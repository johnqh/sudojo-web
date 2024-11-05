import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import Renderer from "../renderers/Renderer";
import SpacerHorizontal from "../xib/SpacerHorizontal";

const SpacedHorizontal: React.FC<{
	renderable?: Nullable<IRenderable>; // Array of Renderable objects
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	const children = renderable?.view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			{children.map((child, index) => (
				<React.Fragment key={index}>
					<Renderer key={child.id} renderable={child} isDarkMode={isDarkMode} /> {}
					{index < children!.length - 1 && <SpacerHorizontal />}{" "}
					{/* Add spacer between items */}
				</React.Fragment>
			))}
		</div>
	);
};

export default SpacedHorizontal;
