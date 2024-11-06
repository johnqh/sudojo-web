import { useState } from "react";
import { AppState, IRenderable } from "../../types/protocols";
import { Nullable } from "Sudojo";
import { useNavigate } from "react-router-dom";

export const useClickable = (
	renderable?: Nullable<IRenderable>,
	handleNavigation?: (route?: Nullable<string>) => void
) => {
	const [isActive, setIsActive] = useState(false);
	const route = renderable?.destination?.route;

	const handleMouseDown = () => {
		if (route) setIsActive(true);
	};

	const handleMouseUp = () => {
		setIsActive(false);
	};

	const handleMouseLeave = () => {
		setIsActive(false);
	};

	const handleClick = () => {
		if (handleNavigation) {
			handleNavigation(renderable?.destination?.route);
		}
	};

	return {
		isActive,
		handleMouseDown,
		handleMouseUp,
		handleMouseLeave,
		handleClick,
		isClickable: !!route, // Indicates if the component should show clickable styles
	};
};
