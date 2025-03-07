import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { Text } from "@radix-ui/themes";

const LineTitleSubtitleValue: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	const view = renderable?.withView(asScreen);
	const title = view?.withTitle()?.text;
	const subtitle = view?.withSubtitle()?.text;
	const valueText = view?.withValueText()?.text;
	const colors = UIColor(isDarkMode);
	const labelColor = colors.label;
	const secondaryLabelColor = colors.secondaryLabel;

	const styleModifier: React.CSSProperties = {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "8px", // Ensures at least 8px spacing between left and right sections
	};

	const textContainerStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start", // Left-aligns title and subtitle
	};

	return (
		<RendererContainer
			renderable={renderable}
			isDarkMode={isDarkMode}
			styleModifier={styleModifier}
		>
			<div style={textContainerStyle}>
				{/* <span style={{ ...CommonStyles.lineTitleStyle(labelColor), marginBottom: "4px" }}>{title}</span>
                <span style={CommonStyles.lineSubtitleStyle(secondaryLabelColor)}>{subtitle}</span> */}

				<Text size="3" weight="medium">
					{title}
				</Text>
				<Text size="3">
					{valueText}
				</Text>
			</div>
			<span style={CommonStyles.lineValueTextStyle(secondaryLabelColor)}>
				{valueText}
			</span>
		</RendererContainer>
	);
};

export default LineTitleSubtitleValue;
