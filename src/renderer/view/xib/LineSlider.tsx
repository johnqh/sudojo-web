import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import UIColor from "../../utils/UIColor";
import { FormControl, InputLabel } from "@mui/material";
import { Text } from "@radix-ui/themes";

const LineSlider: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text || ""; // Get the title from renderable
    const colors = UIColor(isDarkMode);

    return (
        <FormControl fullWidth variant="outlined" style={{ backgroundColor: colors.systemBackground, padding: "16px", borderRadius: "4px" }}>
            <InputLabel style={{ color: colors.secondaryLabel }}>{title}</InputLabel>
            <input
                type="range" // Slider input
                style={{ width: "100%" }} // Full width slider
            />
        </FormControl>
    );
};

export default LineSlider;