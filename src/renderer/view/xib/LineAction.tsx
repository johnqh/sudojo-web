import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import { useClickable } from "../hooks/Clickable";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";

const LineAction: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;

	const styleModifier: React.CSSProperties = {
		justifyContent: "center"
    };
    
    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            <span style={CommonStyles.lineTitleStyle(labelColor)}>{title}</span>
        </RendererContainer>
    );
};

export default LineAction;