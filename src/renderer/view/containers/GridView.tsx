import React from "react";
import { Box, Grid } from "@mui/material";
import { IRenderable, ViewLayout } from "../../types/protocols";
import Renderer from "../renderers/Renderer";
import { Nullable } from "Sudojo";
import * as Sudojo from "Sudojo";

const GridView: React.FC<{
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

	const sectioned =
		view?.layout == ViewLayout.LIST_SECTIONED;

	const list: Nullable<IRenderable[]> = sectioned
		? Sudojo.com.sudobility.renderable.renderable.IRenderable.Companion.flatten(
				children
		  )
		: children;
	if (!list) return null;

	// Calculate the grid size based on the number of columns (12 is the total grid width in Material UI)
	const gridSize = Math.floor(12 / columns);

	return (
		<Box sx={{ width: "100%" }}>
			<Grid container spacing={2}>
				{list?.map((child, index) => (
					<Grid item xs={12} sm={6} md={gridSize} key={index}>
						<Renderer
							key={child.id}
							renderable={child}
							asScreen={false}
							isDarkMode={isDarkMode}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default GridView;
