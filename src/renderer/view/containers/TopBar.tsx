// src/components/AppBarComponent.tsx

import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { auth } from "../../../firebase";
import { useAuth } from "../../../AuthContext";
import { IRenderable } from "../../../types/protocols";
import { UIDevice } from "../../../injections/utils/UIDevice";
import UIColor from "../../../injections/renderers/utils/UIColor";
import { Nullable } from "Sudojo";

const TopBar: React.FC<{
	renderable?: Nullable<IRenderable>;
	isDarkMode: boolean;
	handleDrawerToggle: () => void;
	handleLoginOpen?: () => void;
}> = ({ renderable, isDarkMode, handleDrawerToggle, handleLoginOpen }) => {
	const { currentUser } = useAuth();

	const handleLogout = async () => {
		try {
			await auth.signOut();
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	// Platform detection
	const toolbarHeight = UIDevice.isIOSOrIPad() ? "44px" : "48px";

	// Define styles with React.CSSProperties
	const appBarStyle: React.CSSProperties = {
		zIndex: 1, // Will be dynamically set with theme
		backgroundColor: UIColor(false).secondarySystemBackground,
	};

	const toolbarStyle: React.CSSProperties = {
		height: `${toolbarHeight}`, // Set height based on platform
	};

	const iconButtonStyle: React.CSSProperties = {
		marginRight: 8, // mr: 2 equivalent
		display: "none", // Will be overwritten by `sx`
	};

	const typographyStyle: React.CSSProperties = {
		flexGrow: 1,
		color: UIColor(false).label,
	};

	return (
		<AppBar
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			style={appBarStyle}
		>
			<Toolbar style={toolbarStyle}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ display: { sm: "none" } }} // Only show on mobile
					style={iconButtonStyle}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					noWrap
					sx={{ flexGrow: 1 }}
					style={typographyStyle}
				>
					{renderable?.view?.withTitle()?.text}
				</Typography>
				{currentUser ? (
					<Button color={"inherit"} onClick={handleLogout}>
						Log Out
					</Button>
				) : (
					<Button color="inherit" onClick={handleLoginOpen}>
						Log In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
