import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { Text } from "@radix-ui/themes";

const LineAction: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;

	const styleModifier: React.CSSProperties = {
		justifyContent: "center"
    };
    
    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {/* <span style={CommonStyles.lineTitleStyle(labelColor)}>{title}</span> */}
            <Text size="3" weight="bold" color="blue">
				{title}
			</Text>
        </RendererContainer>
    );
};

export default LineAction;