import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { Text } from "@radix-ui/themes";

const Center: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;

    const styleModifier: React.CSSProperties = {
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center",     // Centers vertically
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {/* <span style={CommonStyles.lineTitleStyle(labelColor)}>{title}</span> */}

			<Text size="4" weight="bold">
				{title}
			</Text>
        </RendererContainer>
    );
};

export default Center;