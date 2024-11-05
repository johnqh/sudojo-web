import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";

const LineTitleDetail: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const details = view?.withDetails()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;

    const styleModifier: React.CSSProperties = {
        flexDirection: "column",
        alignItems: "flex-start", // Ensures left alignment of title and subtitle
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            <span style={{ ...CommonStyles.lineSubtitleStyle(labelColor), marginBottom: "4px" }}>{title}</span>
            <span style={CommonStyles.lineDetailsStyle(labelColor)}>{details}</span>
        </RendererContainer>
    );
};

export default LineTitleDetail;