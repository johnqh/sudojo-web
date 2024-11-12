// src/components/DrawerComponent.tsx

import React from "react";
import { Drawer } from "@mui/material";
import { IRenderable } from "../../types/protocols";
import NavigationMenu from "../containers/NavigationMenu";
import { Nullable } from "Sudojo";

const TabBar: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	width: number;
	mobileOpen: boolean;
	handleDrawerToggle: () => void;
}> = ({ renderable, isDarkMode, width, mobileOpen, handleDrawerToggle }) => {
	return (
		<>
			{/* Temporary drawer for mobile */}
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }} // Keeps the drawer mounted
				sx={{
					display: { xs: "block", sm: "none" }, // Show on mobile only
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: width,
						top: "64px", // Ensure drawer starts below the AppBar
						backgroundColor: "#f0f0f0", // Set background color to light gray
					},
				}}
			>
				<NavigationMenu renderable={renderable} asScreen={true} isDarkMode={false} />
			</Drawer>

			{/* Permanent drawer for desktop */}
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" }, // Show on desktop only
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: width,
						top: "64px", // Start the drawer below the app bar
						backgroundColor: "#f0f0f0", // Set background color to light gray
					},
				}}
				open
			>
				<NavigationMenu renderable={renderable} asScreen={true} isDarkMode={false} />
			</Drawer>
		</>
	);
};

export default TabBar;
