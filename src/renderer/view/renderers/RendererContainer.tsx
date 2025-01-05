import React, { memo, useState } from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import CommonStyles from "../renderers/CommonStyles";
import { useNavigate } from "react-router-dom";

const RendererContainer: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
    styleModifier?: Nullable<React.CSSProperties>;
    bgColor?: Nullable<string>;
    activeBgColor?: Nullable<string>;
    children: React.ReactNode;
}> = ({
    renderable,
    isDarkMode,
    styleModifier,
    bgColor,
    activeBgColor,
    children,
}) => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleMouseDown = () => {
        setIsActive(true);
    };

    const handleMouseUp = () => {
        setIsActive(false);
        // Navigate if a route is defined
        const route = renderable?.destination?.route; // Assuming renderable has a withRoute method
        if (route) {
            navigate(route);
        }
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    const containerStyle = {
        ...CommonStyles.containerStyle({
            isDarkMode,
            isActive,
            isClickable: true, // Since we are handling clicks directly
            bgColor,
            activeBgColor,
        }),
        ...styleModifier,
    };
    return (
        <div
            style={containerStyle}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default RendererContainer;