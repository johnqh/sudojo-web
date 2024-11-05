import React from "react";
import { Nullable } from "Sudojo";
import { AppState, IRenderable } from "../../../types/protocols";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";

const FabExtended: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const imageUrl = imageUrlOf(view?.withImage());
    const colors = UIColor(isDarkMode);

    const containerStyle: React.CSSProperties = {
        display: "inline-flex", // Makes the container auto-resize based on content
        alignItems: "center",
        height: "48px",
        backgroundColor: colors.link, // Sets the background color to the link color
        borderRadius: "24px", // Rounded corners for a pill shape
        cursor: "pointer",
        padding: "8px", // Adds 8px spacing around the image
    };

    const imageStyle: React.CSSProperties = {
        width: "24px", // Scaled down to fit within the button
        height: "24px",
        filter: "invert(1)", // Tints the image to white
    };

    const titleStyle: React.CSSProperties = {
        color: "#FFFFFF",
        fontFamily: "Roboto, sans-serif",
        fontSize: "16px",
        marginLeft: "4px", // Space between the image and title
    };

	const handleClick = () => {
		AppState.Companion.instance?.navigate(
			renderable
		);
	};

    return (
        <button style={containerStyle} onClick={handleClick}>
            {imageUrl && <img src={imageUrl} alt={title || "FabExtended Icon"} style={imageStyle} />}
            <span style={titleStyle}>{title}</span>
        </button>
    );
};

export default FabExtended;