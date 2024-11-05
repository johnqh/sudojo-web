import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { IRenderable } from "../../../types/protocols";
import { Nullable } from "Sudojo";

const Waiting: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%" // Full height of the viewport
		>
			<CircularProgress />
		</Box>
	);
};

export default Waiting;
