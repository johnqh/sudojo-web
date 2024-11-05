import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { FormControl, InputLabel } from "@mui/material";

const SliderLine: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
}> = ({ renderable, isDarkMode }) => {
    const title = renderable?.view?.withTitle()?.text || ""; // Get the title from renderable
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

export default SliderLine;