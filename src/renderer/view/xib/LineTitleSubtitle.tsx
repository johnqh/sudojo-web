import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";

const LineTitleSubtitle: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text;
    const subtitle = renderable?.view?.withSubtitle()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;
    const secondaryLabelColor = colors.secondaryLabel;

    const styleModifier: React.CSSProperties = {
        flexDirection: "column",
        alignItems: "flex-start", // Ensures left alignment of both title and subtitle
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            <span style={{ ...CommonStyles.lineTitleStyle(labelColor), marginBottom: "4px" }}>{title}</span>
            <span style={CommonStyles.lineSubtitleStyle(secondaryLabelColor)}>{subtitle}</span>
        </RendererContainer>
    );
};

export default LineTitleSubtitle;