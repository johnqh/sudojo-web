import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";

const LineToggle: React.FC<{
    renderable?: Nullable<IRenderable>;
	asScreen: boolean;
    isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text || ""; // Get the title from renderable
    const checked = view?.withValueText()?.text == "1"
    const colors = UIColor(isDarkMode);

    const containerStyle: React.CSSProperties = {
        backgroundColor: colors.systemBackground, // Background color of the component
        padding: "8px 16px", // Vertical and horizontal padding
        display: "flex",
        justifyContent: "space-between", // Space between title and checkbox
        alignItems: "center", // Center vertically
    };

    const titleStyle: React.CSSProperties = {
        ...CommonStyles.lineSubtitleStyle(colors.secondaryLabel, 14), // Using subtitle style
        marginRight: "8px", // Space between title and checkbox
    };

    const handleChanged = (checked: boolean) => {
        // if (route) {
        //     AppState.Companion.instance?.navigate(renderable);
        // }
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{title}</div>
            <input
                type="checkbox" // Checkbox for selection
                checked={checked} // Controlled checkbox
                onChange={(e) => handleChanged(e.target.checked)} // Call onChange with the new checked state
            />
        </div>
    );
};

export default LineToggle;