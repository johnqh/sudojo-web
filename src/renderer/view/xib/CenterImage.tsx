import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";

const CenterImage: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text;
    const imageUrl = imageUrlOf(renderable?.view?.withImage());
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;

    const styleModifier: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers both image and title horizontally
        justifyContent: "center", // Centers both vertically within RendererContainer
    };

    const imageStyle: React.CSSProperties = {
        width: "100%",   // Fills the content area width
        aspectRatio: "1 / 1", // Maintains a 1:1 aspect ratio
        objectFit: "cover", // Ensures the image fills the space without distortion
    };

    const titleStyle: React.CSSProperties = {
        ...CommonStyles.lineTitleStyle(labelColor),
        marginTop: "4px", // Space between the image and the title
        textAlign: "center",
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />}
            <span style={titleStyle}>{title}</span>
        </RendererContainer>
    );
};

export default CenterImage;