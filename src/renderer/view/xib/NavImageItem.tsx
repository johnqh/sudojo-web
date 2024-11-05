import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";

const NavImageItem: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
	const title = renderable?.view?.withTitle()?.text;
	const imageUrl = imageUrlOf(renderable?.view?.withImage());
	const colors = UIColor(isDarkMode);
	const labelColor = colors.label;

	const styleModifier: React.CSSProperties = {
		flexDirection: "row",
		alignItems: "center", // Ensures image and title are vertically aligned
	};

	return (
		<RendererContainer
			renderable={renderable}
			isDarkMode={isDarkMode}
            styleModifier={styleModifier}
            bgColor={colors.secondaryLabel}
            activeBgColor={colors.tertiaryLabel}
		>
			{imageUrl && (
				<img
					src={imageUrl}
					alt={title}
					style={CommonStyles.lineImageStyle}
				/>
			)}
			<span
				style={{
					...CommonStyles.lineTitleStyle(labelColor),
                    marginLeft: "8px",
                    color: colors.systemBackground,
				}}
			>
				{title}
			</span>
		</RendererContainer>
	);
};

export default NavImageItem;
