import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { IRenderable, ViewLayout } from "../../../types/protocols";
import * as Sudojo from "Sudojo";
import Renderer from "./Renderer";
import { UIDevice } from "../../utils/UIDevice";
import UIColor from "../utils/UIColor";
import { Nullable } from "Sudojo";

const UITableView: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
	renderable,
}) => {
	let children: Nullable<IRenderable[]> = renderable?.view?.withChildren();
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

	const sectioned =
		renderable?.view?.layout == ViewLayout.Companion.LIST_SECTIONED;

	const list: Nullable<IRenderable[]> = sectioned
		? Sudojo.com.sudobility.renderable.renderable.IRenderable.Companion.flatten(
				children
		  )
		: children;
	if (!list)
		return null

	return (
		<List>
			{list.map((child, index) => (
				<ListItem key={child.id}>
					<Renderer renderable={child} /> {}
				</ListItem>
			))}
		</List>
	);
};

export default UITableView;
