import React from "react";
import UIColor from "../../utils/UIColor";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";

const LineTitleSubtitleValue: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
	const title = view?.withTitle()?.text;
	const subtitle = view?.withSubtitle()?.text;
	const valueText = view?.withValueText()?.text;

	const colors = UIColor(isDarkMode);

	const containerStyle: React.CSSProperties = {
		backgroundColor: colors.tableCellBackground,
		width: "100%",
		minHeight: "48px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "8px 16px",
	};

	const leftContainerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		marginRight: "8px",
	};

	const titleStyle: React.CSSProperties = {
		color: colors.label,
		fontFamily: "Roboto, sans-serif",
		fontSize: "17px",
		marginBottom: "4px",
		whiteSpace: "normal",
	};

	const subtitleStyle: React.CSSProperties = {
		color: colors.secondaryLabel,
		fontFamily: "Roboto, sans-serif",
		fontSize: "12px",
		whiteSpace: "normal",
	};

	const valueTextStyle: React.CSSProperties = {
		color: colors.secondaryLabel,
		fontFamily: "Roboto, sans-serif",
		fontSize: "17px",
		whiteSpace: "nowrap", // Prevents wrapping
		overflow: "hidden",
		textOverflow: "ellipsis", // Adds ellipsis if content overflows
	};

	return (
		<div style={containerStyle}>
			<div style={leftContainerStyle}>
				<span style={titleStyle}>{title}</span>
				<span style={subtitleStyle}>{subtitle}</span>
			</div>
			<span style={valueTextStyle}>{valueText}</span>
		</div>
	);
};

export default LineTitleSubtitleValue;
