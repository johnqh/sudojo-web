import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import UIColor from "../../../injections/renderers/utils/UIColor";

const SelectLine: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	const title = renderable?.view?.withTitle()?.text || ""; // Get the title from renderable
	const valueText = renderable?.view?.withValueText()?.text || ""; // Get the title from renderable
	const children = renderable?.view?.withChildren();
	const colors = UIColor(isDarkMode);

	const onSelect = (value: string) => {};

	return (
		<FormControl fullWidth variant="outlined">
			<InputLabel
				id="select-line-label"
				style={{ color: colors.secondaryLabel }}
			>
				{title}
			</InputLabel>
			<Select
				labelId="select-line-label"
				value={valueText}
				onChange={(e) => onSelect(e.target.value)}
				style={{
					backgroundColor: colors.secondarySystemBackground, // Set background color
					color: colors.label, // Set text color
				}}
				label={title} // Label for the select
			>
				{children?.map((child) => (
					<MenuItem
						key={child.id}
						value={child.view?.withValueText()?.text}
					>
						{child.view?.withTitle()?.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectLine;
