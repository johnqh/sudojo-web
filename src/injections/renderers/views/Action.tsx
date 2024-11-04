import React from "react";
import { Button } from "@mui/material";
import { IRenderable } from "../../../types/protocols";
import * as Sudojo from "Sudojo";
import { Nullable } from "Sudojo";

const Action: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
	renderable,
}) => {
	const handleClick = () => {
		Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance?.navigate(
			renderable
		);
	};

	return (
		<Button
			variant="contained"
			sx={{
				backgroundColor: "blue", // Set button background to blue
				color: "white", // Set text color to white
				"&:hover": {
					backgroundColor: "darkblue", // Darker blue on hover
				},
			}}
			onClick={handleClick}
		>
			{renderable?.view?.withTitle()?.text}
		</Button>
	);
};

export default Action;
