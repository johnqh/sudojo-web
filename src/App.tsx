import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { Box, CssBaseline, AppBar, Toolbar } from "@mui/material";
import ViewControllerMapping from "./renderer/screen/ViewControllerMapping";
import UIWindow from "./renderer/screen/UIWindow";
import ViewMapping from "./renderer/view/ViewMapping";
import { AppState } from "./renderer/types/protocols";
import SudokuView from "./sudokurenderer/renderer/SudokuView";

const AppContent: React.FC = () => {
	useEffect(() => {
		ViewControllerMapping.shared = ViewControllerMapping.defaultAnd({});
		ViewMapping.shared = ViewMapping.defaultAnd({
			sudoku_grid: SudokuView,
		});
		return () => {};
	}, []);
    const location = useLocation();
    const pathname = `${location.pathname}${location.search}`;
	AppState.Companion.instance?.navigateTo(pathname);
	return <UIWindow />;
};

const App: React.FC = () => {
	return (
		<Router>
			<CssBaseline />
			<Routes>
				<Route path="*" element={<AppContent />} />{" "}
				{/* Catch-all route for 404 */}
			</Routes>
		</Router>
	);
};

export default App;
