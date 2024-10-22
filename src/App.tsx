import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, AppBar, Toolbar } from '@mui/material';
import Footer from './components/Footer'; // Import Footer
import ViewControllerMapping from './injections/renderers/viewcontrollers/ViewControllerMapping';
import ViewMapping from './injections/renderers/views/ViewMapping';
import UIWindow from './injections/renderers/viewcontrollers/UIWindow';

const AppContent: React.FC = () => {
    useEffect(() => {
        ViewControllerMapping.shared = ViewControllerMapping.defaultAnd({});
        ViewMapping.shared = ViewMapping.defaultAnd({});
        return () => {};
    }, []);

    return <UIWindow />;
    // return (
    //     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    //         {/* AppBar */}
    //         <AppBar
    //             position="fixed"
    //             sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //         >
    //             <Toolbar>
    //                 <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
    //             </Toolbar>
    //         </AppBar>

    //         {/* Drawer */}
    //         <DrawerComponent
    //             mobileOpen={mobileOpen}
    //             handleDrawerToggle={handleDrawerToggle}
    //             menuItems={menuItems}
    //             drawerWidth={drawerWidth}
    //         />

    //         {/* Main Content */}
    //         <Box
    //             component="main"
    //             sx={{
    //                 flexGrow: 1,
    //                 p: 3,
    //                 marginLeft: { sm: `${drawerWidth}px` },
    //                 marginTop: '64px', // Offset for AppBar
    //                 overflowY: 'auto', // Ensure scrolling if needed
    //             }}
    //         >
    //             <Routes>
    //                 <Route
    //                     path="/"
    //                     element={
    //                         <MainView
    //                             selectedMenu="Home"
    //                             profileItems={profileItems}
    //                             settingsItems={settingsItems}
    //                             apiData={[]}
    //                         />
    //                     }
    //                 />
    //                 <Route
    //                     path="/profile"
    //                     element={
    //                         <MainView
    //                             selectedMenu="Profile"
    //                             profileItems={profileItems}
    //                             settingsItems={settingsItems}
    //                             apiData={[]}
    //                         />
    //                     }
    //                 />
    //                 <Route
    //                     path="/settings"
    //                     element={
    //                         <MainView
    //                             selectedMenu="Settings"
    //                             profileItems={profileItems}
    //                             settingsItems={settingsItems}
    //                             apiData={[]}
    //                         />
    //                     }
    //                 />
    //                 <Route
    //                     path="/about"
    //                     element={
    //                         <MainView
    //                             selectedMenu="About"
    //                             profileItems={profileItems}
    //                             settingsItems={settingsItems}
    //                             apiData={[]}
    //                         />
    //                     }
    //                 />
    //                 <Route
    //                     path="/settings/general"
    //                     element={<GeneralSettings />}
    //                 />

    //                 {/* 404 Route */}
    //                 <Route path="*" element={<NotFound />} />
    //             </Routes>
    //         </Box>

    //         {/* Footer - positioned below the main content and drawer */}
    //         <Footer />
    //     </Box>
    // );
};

const App: React.FC = () => {
    return (
        <Router>
            <CssBaseline />
            <AppContent />
        </Router>
    );
};

export default App;
