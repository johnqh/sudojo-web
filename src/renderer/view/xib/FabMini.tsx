import React from "react";
import { Nullable } from "Sudojo";
import { AppState, IRenderable } from "../../../types/protocols";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";

const FabMini: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text;
    const imageUrl = imageUrlOf(renderable?.view?.withImage());
    const colors = UIColor(isDarkMode);

    const containerStyle: React.CSSProperties = {
        width: "48px",
        height: "48px",
        backgroundColor: colors.link, // Sets the button background color to the link color
        borderRadius: "24px", // Fully rounds the button for a circular shape
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none", // Removes any default button border
        cursor: "pointer",
        overflow: "hidden", // Ensures the image stays within the circular bounds
        padding: "8px", // Adds 8px spacing around the image
    };

    const imageStyle: React.CSSProperties = {
        width: "24px", // Scaled down to fit within the button
        height: "24px",
        filter: "invert(1)", // Tints the image to white
    };

	const handleClick = () => {
		AppState.Companion.instance?.navigate(
			renderable
		);
	};

    return (
        <button style={containerStyle} onClick={handleClick}>
            {imageUrl && <img src={imageUrl} alt={title || "FabMini Icon"} style={imageStyle} />}
        </button>
    );
};

export default FabMini;