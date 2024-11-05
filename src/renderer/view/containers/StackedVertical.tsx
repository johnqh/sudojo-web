import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import Renderer from "../renderers/Renderer";

const SpacedVertical: React.FC<{
	renderable?: Nullable<IRenderable>; // Array of Renderable objects
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	let children = renderable?.view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
			}}
		>
			{children.map((child, index) => (
				<Renderer renderable={child} isDarkMode={isDarkMode} />
			))}
		</div>
	);
};

export default SpacedVertical;
