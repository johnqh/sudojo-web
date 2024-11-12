import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../utils/UIColor";
import RendererContainer from "../renderers/RendererContainer";
import { Text } from "@radix-ui/themes";

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
            {/* <span style={{ ...CommonStyles.lineSubtitleStyle(labelColor), marginBottom: "4px" }}>{title}</span>
            <span style={CommonStyles.lineDetailsStyle(labelColor)}>{details}</span> */}
            <Text color="gray" size="2">
				{title}
			</Text>
            <Text color="gray" size="3" weight="medium">
				{details}
			</Text>
        </RendererContainer>
    );
};

export default LineTitleDetail;