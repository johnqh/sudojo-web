import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";

const Chip: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;

    const styleModifier: React.CSSProperties = {
        display: "inline-flex", // Allows the container to size based on content
        padding: "4px 8px", // Adds some padding around the title for a "chip" appearance
        borderRadius: "16px", // Rounds the container edges
        backgroundColor: colors.secondarySystemBackground,
        justifyContent: "center", // Centers the title horizontally
        alignItems: "center", // Centers the title vertically
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            <span style={CommonStyles.lineTitleStyle(labelColor)}>{title}</span>
        </RendererContainer>
    );
};

export default Chip;