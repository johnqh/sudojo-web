import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { Text } from "@radix-ui/themes";

const LineTitleSubtitle: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const subtitle = view?.withSubtitle()?.text;
    const colors = UIColor(isDarkMode);
    const labelColor = colors.label;
    const secondaryLabelColor = colors.secondaryLabel;

    const styleModifier: React.CSSProperties = {
        flexDirection: "column",
        alignItems: "flex-start", // Ensures left alignment of both title and subtitle
    };

    return (
        <RendererContainer renderable={renderable} isDarkMode={isDarkMode} styleModifier={styleModifier}>
            {/* <span style={{ ...CommonStyles.lineTitleStyle(labelColor), marginBottom: "4px" }}>{title}</span>
            <span style={CommonStyles.lineSubtitleStyle(secondaryLabelColor)}>{subtitle}</span> */}

			<Text size="3" weight="medium">
				{title}
			</Text>
            <Text color="gray" size="2">
				{subtitle}
			</Text>
        </RendererContainer>
    );
};

export default LineTitleSubtitle;