import React from "react";
import { Nullable } from "Sudojo";
import { IRenderable } from "../../types/protocols";
import { useClickable } from "../hooks/Clickable";
import CommonStyles from "../renderers/CommonStyles";

const RendererContainer: React.FC<{
	renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
    styleModifier: Nullable<React.CSSProperties>;
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
	const {
		isActive,
		handleMouseDown,
		handleMouseUp,
		handleMouseLeave,
		handleClick,
		isClickable,
	} = useClickable(renderable);

    const containerStyle = {
        ...CommonStyles.containerStyle({
            isDarkMode,
            isActive,
            isClickable,
            bgColor,
            activeBgColor,
        }),
        ...styleModifier
    }

	return (
		<div
			style={containerStyle}
			onClick={handleClick}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
};

export default RendererContainer;
