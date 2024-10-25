import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { Renderable } from "../../../types/protocols";
import * as Sudojo from "renderable";
import Renderer from "./Renderer";
import { UIDevice } from "../../utils/UIDevice";
import UIColor from "../utils/UIColor";

const UITableView: React.FC<{ renderable?: Renderable | null }> = ({
	renderable,
}) => {
	let children = renderable?.children;
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
		renderable?.display?.presentation?.asScreen?.view?.layout ==
		Sudojo.com.sudobility.renderable.renderable.Layout.Companion
			.LIST_SECTIONED;

	const list = sectioned
		? Sudojo.com.sudobility.renderable.renderable.Renderable.Companion.flatten(
				children
		  )
		: children;
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
