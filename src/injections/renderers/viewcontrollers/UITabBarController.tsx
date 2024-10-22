import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Renderable } from '../../../types/protocols';
import AppBarComponent from '../../../components/AppBarComponent';
import Footer from '../../../components/Footer';
import TabBar from '../views/TabBar';
import UINavigationController from './UINavigationController';

const UITabBarController: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    console.log('UITabBarController: ' + renderable);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const children = renderable?.children
    if (!children) {
        return null
    }
    const selected = children.find(item => item.route === renderable.route) ?? children[0];

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <TabBar
                renderable={renderable}
                width={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: { sm: `${drawerWidth}px` },
                    marginTop: '64px', // Offset for AppBar
                    overflowY: 'auto', // Ensure scrolling if needed
                }}
            >
                <UINavigationController renderable={selected}/>
            </Box>

            {/* Footer - positioned below the main content and drawer */}
            <Footer />
        </Box>
    );
};
export default UITabBarController;
