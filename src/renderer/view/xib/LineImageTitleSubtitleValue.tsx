import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";
import { Text } from "@radix-ui/themes";

const LineImageTitleSubtitleValue: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	const view = renderable?.withView(asScreen);
	const title = view?.withTitle()?.text;
	const subtitle = view?.withSubtitle()?.text;
	const valueText = view?.withValueText()?.text;
	const imageUrl = imageUrlOf(view?.withImage());
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
		marginLeft: "8px", // Space between image and title/subtitle
	};

	const valueTextStyle: React.CSSProperties = {
		...CommonStyles.lineValueTextStyle(secondaryLabelColor),
		textAlign: "right", // Ensures the valueText is right-aligned
		whiteSpace: "nowrap", // Prevents wrapping for consistent right alignment
	};

	return (
		<RendererContainer
			renderable={renderable}
			isDarkMode={isDarkMode}
			styleModifier={styleModifier}
		>
			{imageUrl && (
				<img
					src={imageUrl}
					alt={title}
					style={CommonStyles.lineImageStyle}
				/>
			)}
			<div style={textContainerStyle}>
				{/* <span style={CommonStyles.lineTitleStyle(labelColor)}>{title}</span>
                <span style={CommonStyles.lineSubtitleStyle(secondaryLabelColor)}>{subtitle}</span> */}

				<Text size="3" weight="medium">
					{title}
				</Text>
				<Text color="gray" size="2">
					{subtitle}
				</Text>
			</div>
			{/* <span style={valueTextStyle}>{valueText}</span> */}

			<Text size="3" color="plum">
				{valueText}
			</Text>
		</RendererContainer>
	);
};

export default LineImageTitleSubtitleValue;
