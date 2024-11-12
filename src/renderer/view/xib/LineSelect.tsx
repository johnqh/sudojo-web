import React, { useState } from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import { Button, Menu, MenuItem } from "@mui/material";
import UIColor from "../../utils/UIColor";
import CommonStyles from "../renderers/CommonStyles";
import { Flex, Text } from "@radix-ui/themes";
import SpacerHorizontal from "./SpacerHorizontal";

const LineSelect: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	const view = renderable?.withView(asScreen);
	const title = view?.withTitle()?.text || ""; // Get the title from renderable
	const valueText = view?.withValueText()?.text || ""; // Get the current selected value
	const children = view?.withChildren();
	const colors = UIColor(isDarkMode);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget); // Open the menu
	};

	const handleClose = () => {
		setAnchorEl(null); // Close the menu
	};

	const onSelect = (value: Nullable<string>) => {
		// Handle selection
		console.log(value); // You can replace this with your logic
		handleClose(); // Close the menu after selection
	};

	const containerStyle: React.CSSProperties = {
		backgroundColor: colors.systemBackground, // Background color of the component
		padding: "8px 16px", // Vertical and horizontal padding
		display: "flex",
		justifyContent: "space-between", // Space between title and checkbox
        alignItems: "center", // Center vertically
        width: "100%",
    };
    
	const titleStyle: React.CSSProperties = {
		...CommonStyles.lineTitleStyle(colors.label, 14), // Using subtitle style
		marginRight: "8px", // Space between title and checkbox
	};

	return (
		<div style={containerStyle}>
			<Flex direction="row" gap="3" width="100%">
				{/* <div style={titleStyle}>{title}</div> */}

				<Text size="3" weight="medium">
					{title}
				</Text>
				<SpacerHorizontal asScreen={false} isDarkMode={false} />
				<Button
					variant="outlined"
					style={{
						backgroundColor: colors.secondarySystemBackground, // Set background color
						color: colors.label, // Set text color
					}}
					onClick={handleClick}
				>
					{valueText || "Select an option"}
				</Button>
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{children?.map((child) => (
						<MenuItem
							key={child.id}
							onClick={() =>
								onSelect(child.view?.withValueText()?.text)
							}
						>
							{child.view?.withTitle()?.text}
						</MenuItem>
					))}
				</Menu>
			</Flex>
		</div>
	);
};

export default LineSelect;
