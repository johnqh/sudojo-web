import React from "react";
import { IRenderable } from "../../types/protocols";
import { Nullable } from "Sudojo";
import ViewMapping from "../ViewMapping";

const Renderer: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	// Get the component based on the type
	const Component = ViewMapping.shared?.get(renderable?.view?.layout);

	// If the component doesn't exist in the mapping, render nothing
	if (!Component) {
		return null;
	}

	// Render the component with the text prop
	return (
		<Component
			renderable={renderable}
			asScreen={asScreen}
			isDarkMode={isDarkMode}
		/>
	);
};

export default Renderer;
