import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import Renderer from "../renderers/Renderer";

const StackedHorizontal: React.FC<{
	renderable?: Nullable<IRenderable>; // Array of Renderable objects
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	let children: Nullable<IRenderable[]> = renderable?.view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "flex-start",
			}}
		>
			{" "}
			{/* Align items to the top */}
			{children.map((child, index) => (
				<Renderer renderable={child} isDarkMode={isDarkMode} />
			))}
		</div>
	);
};

export default StackedHorizontal;
