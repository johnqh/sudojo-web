import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";

const Search: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text || "Search"; // Default title if none provided
    const valueText = view?.withValueText()?.text;
    const colors = UIColor(isDarkMode);

    const containerStyle: React.CSSProperties = {
        backgroundColor: colors.systemBackground, // Background color of the component
        padding: "8px 16px", // Vertical and horizontal padding
    };

    const titleStyle: React.CSSProperties = {
        ...CommonStyles.lineSubtitleStyle(colors.secondaryLabel, 14), // Using subtitle style
        marginBottom: "4px", // Space below title
    };

    const inputStyle = CommonStyles.inputStyle(colors.label, colors.secondarySystemBackground, 14); // Using the new inputStyle function

    const handleInput = (value: string) => {
        // if (route) {
        //     AppState.Companion.instance?.navigate(renderable);
        // }
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{title}</div>
            <input
                type="text" // Standard text input for search
                style={inputStyle}
                value={valueText || ""}
                placeholder="Type to search..." // Placeholder text for search input
                onChange={(e) => handleInput(e.target.value)} // Call onChange with the new value
            />
        </div>
    );
};

export default Search;