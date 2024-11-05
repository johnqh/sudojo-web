import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { imageUrlOf } from "../../utils/IRenderableImage+Url";
import RendererContainer from "../renderers/RendererContainer";

const Tile: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text || ""; // Get the title from renderable
    const subtitle = renderable?.view?.withSubtitle()?.text || ""; // Get the subtitle from renderable
    const imageUrl = imageUrlOf(renderable?.view?.withImage());
    const colors = UIColor(isDarkMode);

    const tileStyle: React.CSSProperties = {
        width: "100%", // Full width
        backgroundColor: colors.systemBackground, // Background color of the tile
        border: `1px solid ${colors.secondaryLabel}`, // 1px border with secondaryLabel color
        borderRadius: "8px", // Rounded corners with 8px radius
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow for elevation effect
        overflow: "hidden", // Ensures child elements do not overflow the tile
        boxSizing: "border-box", // Include padding in width/height calculations
    };

    const imageStyle: React.CSSProperties = {
        width: "100%", // Full width
        height: "auto", // Maintain aspect ratio
        aspectRatio: "4 / 3", // Aspect ratio of 4:3
        objectFit: "cover", // Cover the area while maintaining aspect ratio
    };

    const titleStyle: React.CSSProperties = {
        ...CommonStyles.lineTitleStyle(colors.label, 16), // Using line title style for title
        marginTop: "8px", // Space below the image
    };

    const subtitleStyle: React.CSSProperties = {
        ...CommonStyles.lineSubtitleStyle(colors.secondaryLabel, 14), // Using subtitle style
        marginTop: "4px", // Space below title
        marginBottom: "8px", // Space below subtitle to the parent component
    };

    return (
        <RendererContainer 
            renderable={renderable} 
            isDarkMode={isDarkMode} 
            styleModifier={{ padding: "0px 0px" }} // No padding for the container
        >
            <div style={tileStyle}>
                {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />}
                <div style={titleStyle}>{title}</div>
                <div style={subtitleStyle}>{subtitle}</div>
            </div>
        </RendererContainer>
    );
};

export default Tile;