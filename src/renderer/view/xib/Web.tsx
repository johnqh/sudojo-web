import React from "react";
import { IRenderable } from "../../../types/protocols";
import { Nullable } from "Sudojo";

const WebView: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	const url = renderable?.withView(asScreen)?.withUrl()?.url;
	if (!url) return null;

	return (
		<iframe
			src={url?.replace("file:///", "/")}
			title="Web View"
			style={{
				width: "100%",
				height: "100vh", // Make it take full height of the viewport or parent
				border: "none", // Remove the border for a clean look
			}}
		/>
	);
};

export default WebView;
