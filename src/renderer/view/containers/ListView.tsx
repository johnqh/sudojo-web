import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { IRenderable, ViewLayout } from "../../../types/protocols";
import * as Sudojo from "Sudojo";
import Renderer from "../renderers/Renderer";
import { UIDevice } from "../../../injections/utils/UIDevice";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { Nullable } from "Sudojo";

const ListView: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	const view = renderable?.withView(asScreen);
	let children: Nullable<IRenderable[]> = view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}

	const containerStyle: React.CSSProperties = {
		height: UIDevice.isIOSOrIPad() ? "44px" : "48px",
		display: "flex",
		alignItems: "center",
		padding: "0px",
		backgroundColor: UIColor(false).systemGroupedBackground,
		width: "100%",
		margin: "0", // No margin on top, left, or right
		justifyContent: "start", // Align breadcrumbs to the left
	};

	const sectioned = view?.layout == ViewLayout.LIST_SECTIONED;

	const list: Nullable<IRenderable[]> = sectioned
		? Sudojo.com.sudobility.renderable.renderable.IRenderable.flatten(
				children
		  )
		: children;
	if (!list) return null;

	return (
		<List>
			{list.map((child, index) => (
				<ListItem key={child.id}>
					<Renderer
						renderable={child}
						asScreen={false}
						isDarkMode={isDarkMode}
					/>{" "}
					{}
				</ListItem>
			))}
		</List>
	);
};

export default ListView;
