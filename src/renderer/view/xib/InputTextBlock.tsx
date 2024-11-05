import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";

const InputTextBlock: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
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

    const textareaStyle: React.CSSProperties = {
        ...CommonStyles.inputStyle(colors.label, colors.secondarySystemBackground, 14), // Using the new inputStyle function
        width: "100%", // Full width
        height: "100px", // Fixed height for multiline input
        resize: "vertical", // Allows vertical resizing
        overflowY: "auto", // Enables vertical scrolling
        boxSizing: "border-box", // Ensures padding is included in the width
    };

    const handleInput = (value: string) => {
        // if (route) {
        //     AppState.Companion.instance?.navigate(renderable);
        // }
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{title}</div>
            <textarea
                style={textareaStyle}
                value={valueText || ""}
                placeholder={valueText ? "" : title} // Show title as placeholder if no value
                onChange={(e) => handleInput(e.target.value)} // Call onChange with the new value
            />
        </div>
    );
};

export default InputTextBlock;