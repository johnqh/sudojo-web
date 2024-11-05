import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import Renderer from "../renderers/Renderer";

const StackedHorizontal: React.FC<{
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

export default StackedHorizontal;
