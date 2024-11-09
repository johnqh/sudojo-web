import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import UIColor from "../../utils/UIColor";

const Header: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	const view = renderable?.withView(asScreen);
	const title = view?.withTitle()?.text;
	const colors = UIColor(isDarkMode);
	const secondaryLabelColor = colors.secondaryLabel;

	const headerStyle: React.CSSProperties = {
		width: "100%",
		height: "32px", // Height of the header
		display: "flex",
		alignItems: "center", // Center title vertically
		padding: "0 16px", // Horizontal padding
		backgroundColor: colors.systemBackground, // Background color
	};

	const titleStyle: React.CSSProperties = {
		color: secondaryLabelColor,
		fontFamily: "Roboto, sans-serif",
		fontSize: "14px",
		marginBottom: "4px", // Adds 4px space to the bottom of the component
	};

	const lineStyle: React.CSSProperties = {
		height: "2px", // Height of the line
		backgroundColor: colors.secondarySystemBackground, // Line color
		width: "calc(100% - 32px)", // Full width minus padding (16px left + 16px right)
		margin: "0 16px", // Margin to create spacing between the line and header
	};

	return (
		<div style={headerStyle}>
			<div>{title && <span style={titleStyle}>{title}</span>}</div>
			<div style={lineStyle} />
		</div>
	);
};

export default Header;
