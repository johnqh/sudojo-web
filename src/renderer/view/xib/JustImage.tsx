import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";

const JustImage: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const imageUrl = imageUrlOf(view?.withImage());

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

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {imageUrl && <img src={imageUrl} style={imageStyle} />}
        </RendererContainer>
    );
};

export default JustImage;