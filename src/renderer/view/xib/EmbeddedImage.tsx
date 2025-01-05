import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";
import RendererContainer from "../renderers/RendererContainer";

const EmbeddedImage: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const imageUrl = imageUrlOf(view?.withImage());

    const styleModifier: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Ensures the image is cropped if it overflows
        padding: "0px 0px", // Ensures no padding is applied
    };

    const imageStyle: React.CSSProperties = {
        width: "100%", // Full width
        height: "100%", // Full height
        objectFit: "cover", // Ensures the image covers the container, cropping if necessary
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {imageUrl && <img src={imageUrl} alt="Image" style={imageStyle} />}
        </RendererContainer>
    );
};

export default EmbeddedImage;