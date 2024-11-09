import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import Renderer from "../renderers/Renderer";
import SpacerVertical from "../xib/SpacerVertical";

const SpacedVertical: React.FC<{
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
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{children.map((child, index) => (
				<React.Fragment key={index}>
					<Renderer
						key={child.id}
						renderable={child}
						asScreen={false}
						isDarkMode={isDarkMode}
					/>{" "}
					{}
					{index < children!.length - 1 && (
						<SpacerVertical
							renderable={child}
							asScreen={false}
							isDarkMode={isDarkMode}
						/>
					)}{" "}
					{/* Add spacer between items */}
				</React.Fragment>
			))}
		</div>
	);
};

export default SpacedVertical;
