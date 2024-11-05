import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";

const LineImageTitleSubtitle: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const subtitle = view?.withSubtitle()?.text;
    const imageUrl = imageUrlOf(view?.withImage());
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;
    const secondaryLabelColor = colors.secondaryLabel;

    const styleModifier: React.CSSProperties = {
        flexDirection: "row",
        alignItems: "center", // Vertically aligns the image with the text
    };

    const textContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "8px", // Space between image and text
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {imageUrl && (
                <img src={imageUrl} alt={title} style={CommonStyles.lineImageStyle} />
            )}
            <div style={textContainerStyle}>
                <span style={CommonStyles.lineTitleStyle(labelColor)}>{title}</span>
                <span style={CommonStyles.lineSubtitleStyle(secondaryLabelColor)}>{subtitle}</span>
            </div>
        </RendererContainer>
    );
};

export default LineImageTitleSubtitle;