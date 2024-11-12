import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Footer from "../view/xib/Footer";
import TabBar from "../view/xib/TabBar";
import UINavigationController from "./UINavigationController";
import TopBar from "../view/containers/TopBar";
import { Nullable } from "Sudojo";
import { IRenderable } from "../types/protocols";

const UITabBarController: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	currentId?: Nullable<string>;
}> = ({ renderable, isDarkMode, currentId }) => {
	console.log("UITabBarController: " + renderable);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const children = renderable?.screen?.view?.withChildren();
	if (!children) {
		return null;
	}
	const current = renderable?.findById(currentId ?? "/");
	const breadcrumbs = current?.breadcrumbs();
	const selected = breadcrumbs?.[1] ?? children[0];

	const drawerWidth = 240;

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			{/* AppBar */}
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<TopBar
						renderable={renderable}
						handleDrawerToggle={handleDrawerToggle}
						isDarkMode={false}
					/>
				</Toolbar>
			</AppBar>

			{/* Drawer */}
			<TabBar
				renderable={renderable}
				width={drawerWidth}
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
				isDarkMode={false}
			/>

			{/* Main Content */}
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					marginLeft: { sm: `${drawerWidth}px` },
					marginTop: "64px", // Offset for AppBar
					overflowY: "auto", // Ensure scrolling if needed
					padding: "0",
				}}
			>
				<UINavigationController
					renderable={selected}
					isDarkMode={isDarkMode}
					currentId={currentId}
				/>
			</Box>

			{/* Footer - positioned below the main content and drawer */}
			<Footer asScreen={false} isDarkMode={false} />
		</Box>
	);
};
export default UITabBarController;
