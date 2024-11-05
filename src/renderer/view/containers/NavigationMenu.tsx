import React from "react";
import NavigationMenuItem from "../../../injections/renderers/views/NavigationMenuItem";
import { IRenderable } from "../../../types/protocols";
import { List, ListItem } from "@mui/material";
import { Nullable } from "Sudojo";
import Renderer from "../renderers/Renderer";

const NavigationMenu: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	isSelected?: boolean;
}> = ({ renderable, isDarkMode }) => {
	const children = renderable?.view?.withChildren();
	if (!children) {
		return null;
	}

	// Define styles using React.CSSProperties
	const containerStyle: React.CSSProperties = {
		backgroundColor: "white",
		padding: "10px", // Optional padding for spacing
	};

	return (
		<div style={containerStyle}>
			<List>
				{children.map((child) => (
					<ListItem key={child.id}>
						<Renderer renderable={child} isDarkMode={isDarkMode} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default NavigationMenu;
