import React from "react";
import UIColor from "../../utils/UIColor";
import { Nullable } from "Sudojo";
import { AppState, IRenderable } from "../../types/protocols";
import { DestinationHandler } from "../../utils/DestinationHandler";
import { useNavigate } from "react-router-dom";

const Action: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
	const colors = UIColor(isDarkMode);

    const width = view?.withModifier()?.width;
	const title = view?.withTitle()?.text;

	const containerStyle: React.CSSProperties = {
		width: width ? `${width}px` : "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "8px 16px",
	};

	const buttonStyle: React.CSSProperties = {
        backgroundColor: colors.link,
		color: "#FFFFFF",
		fontFamily: "Roboto, sans-serif",
		fontSize: "17px",
		borderRadius: "8px",
		border: `2px solid ${colors.systemPink}`,
		cursor: "pointer",
		textAlign: "center",
		width: "100%",
	};

	const handleClick = () => {
		DestinationHandler.handle(renderable, (path) => {
			const navigate = useNavigate();
			navigate(path);
		})
	}

	return (
		<div style={containerStyle}>
			<button style={buttonStyle} onClick={handleClick}>
				{title}
			</button>
		</div>
	);
};

export default Action;
