import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import Renderer from "../renderers/Renderer";
import SpacerVertical from "../xib/SpacerVertical";

const SpacedVertical: React.FC<{
	renderable?: Nullable<IRenderable>; // Array of Renderable objects
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	const children = renderable?.view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{children.map((child, index) => (
				<React.Fragment key={index}>
					<Renderer key={child.id} renderable={child} isDarkMode={isDarkMode} /> {}
					{index < children!.length - 1 && <SpacerVertical />}{" "}
					{/* Add spacer between items */}
				</React.Fragment>
			))}
		</div>
	);
};

export default SpacedVertical;
