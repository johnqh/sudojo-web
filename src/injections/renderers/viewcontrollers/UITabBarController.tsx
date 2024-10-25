import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Renderable } from '../../../types/protocols';
import Footer from '../../../components/Footer';
import TabBar from '../views/TabBar';
import UINavigationController from './UINavigationController';
import TopBar from '../views/TopBar';
import { Nullable } from 'renderable';

const UITabBarController: React.FC<{ renderable?: Nullable<Renderable>, currentId?: Nullable<string> }> = ({
    renderable,
    currentId,
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
    const current = renderable?.findById(currentId ?? "/")
    const breadcrumbs = current?.breadcrumbs();
    const selected = breadcrumbs?.[1] ?? children[0]

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <TopBar renderable = {renderable} handleDrawerToggle={handleDrawerToggle} />
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
                    padding:'0'
                }}
            >
                <UINavigationController renderable={selected} currentId={currentId}/>
            </Box>

            {/* Footer - positioned below the main content and drawer */}
            <Footer />
        </Box>
    );
};
export default UITabBarController;
