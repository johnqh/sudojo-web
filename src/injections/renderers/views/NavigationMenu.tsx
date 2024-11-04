import React from "react";
import NavigationMenuItem from "./NavigationMenuItem";
import { IRenderable } from "../../../types/protocols";
import { List, ListItem } from "@mui/material";
import { Nullable } from "Sudojo";

const NavigationMenu: React.FC<{
	renderable?: Nullable<IRenderable>;
	isSelected?: boolean;
}> = ({ renderable }) => {
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
						<NavigationMenuItem
							renderable={child}
							isSelected={
								child.destination?.route ==
								renderable?.destination?.route
							}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default NavigationMenu;
