import React from "react";
import { Nullable } from "Sudojo";
import { AppState, IRenderable } from "../../types/protocols";
import UIColor from "../../utils/UIColor";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";
import { DestinationHandler } from "../../utils/DestinationHandler";
import { useNavigate } from "react-router-dom";

const Fab: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const imageUrl = imageUrlOf(view?.withImage());
    const colors = UIColor(isDarkMode);

    const containerStyle: React.CSSProperties = {
        width: "64px",
        height: "64px",
        backgroundColor: colors.link, // Sets the button background color to the link color
        borderRadius: "32px", // Fully rounds the button for a circular shape
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none", // Removes any default button border
        cursor: "pointer",
        overflow: "hidden", // Ensures the image stays within the circular bounds
        padding: "12px", // Adds 12px spacing around the image
    };

    const imageStyle: React.CSSProperties = {
        width: "32px", // Ensures the image is proportionally smaller within the button
        height: "32px",
        filter: "invert(1)", // Tints the image to white
    };

	const handleClick = () => {
		DestinationHandler.handle(renderable, (path) => {
			const navigate = useNavigate();
			navigate(path);
		})
	}


    return (
        <button style={containerStyle} onClick={handleClick}>
            {imageUrl && <img src={imageUrl} alt={title || "Fab Icon"} style={imageStyle} />}
        </button>
    );
};

export default Fab;