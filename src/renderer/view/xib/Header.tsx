import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import UIColor from "../../utils/UIColor";

const Header: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const colors = UIColor(isDarkMode);
    const secondaryLabelColor = colors.secondaryLabel;

    const headerStyle: React.CSSProperties = {
        height: "32px",
        backgroundColor: colors.secondarySystemBackground, // Sets the background color
        display: "flex",
        alignItems: "flex-end", // Aligns title at the bottom of the header
        padding: "0 16px", // Adds horizontal padding of 16px
    };

    const titleStyle: React.CSSProperties = {
        color: secondaryLabelColor,
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        marginBottom: "4px", // Adds 4px space to the bottom of the component
    };

    return (
        <div style={headerStyle}>
            <span style={titleStyle}>{title}</span>
        </div>
    );
};

export default Header;