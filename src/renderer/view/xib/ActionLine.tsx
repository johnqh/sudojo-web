import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { useClickable } from "../hooks/Clickable";

const ActionLine: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text || ""; // Get the title from renderable
    const colors = UIColor(isDarkMode);

    const containerStyle: React.CSSProperties = {
        backgroundColor: colors.systemBackground, // Background color of the component
        padding: "8px 16px", // Vertical and horizontal padding
        display: "flex",
        justifyContent: "center", // Center align the title
        alignItems: "center", // Center vertically
    };

    const titleStyle: React.CSSProperties = {
        ...CommonStyles.lineTitleStyle(colors.label, 16), // Using line title style for title
    };

    const {
        isActive,
        handleMouseDown,
        handleMouseUp,
        handleMouseLeave,
        handleClick,
        isClickable,
    } = useClickable(renderable); // Use the clickable hook

    return (
        <div
            style={containerStyle}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <span style={titleStyle}>{title}</span>
        </div>
    );
};

export default ActionLine;