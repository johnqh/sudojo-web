import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";

const SpacerHorizontal: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    return (
        <div style={{ flexGrow: 1 }} /> // This div will grow to fill horizontal space
    );
};

export default SpacerHorizontal;