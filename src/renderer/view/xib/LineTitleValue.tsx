import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";

const LineTitleSubtitleValue: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text;
    const subtitle = renderable?.view?.withSubtitle()?.text;
    const valueText = renderable?.view?.withValueText()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;
    const secondaryLabelColor = colors.secondaryLabel;

    const styleModifier: React.CSSProperties = {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px", // Ensures at least 8px spacing between left and right sections
    };

    const textContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Left-aligns title and subtitle
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            <div style={textContainerStyle}>
                <span style={{ ...CommonStyles.lineTitleStyle(labelColor), marginBottom: "4px" }}>{title}</span>
                <span style={CommonStyles.lineSubtitleStyle(secondaryLabelColor)}>{subtitle}</span>
            </div>
            <span style={CommonStyles.lineValueTextStyle(secondaryLabelColor)}>{valueText}</span>
        </RendererContainer>
    );
};

export default LineTitleSubtitleValue;