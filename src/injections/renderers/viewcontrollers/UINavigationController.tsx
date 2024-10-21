import React from 'react';
import { Renderable } from '../../../types/protocols';
import NavigationBreadcrumbs from '../views/NavigationBreadcrumbs';

const UINavigationController: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    // Define styles using React.CSSProperties
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh', // Full vertical height
        boxSizing: 'border-box',
    };

    return (
        <div style={containerStyle}>
            <NavigationBreadcrumbs renderable={renderable} />
            <UINavigationController renderable={renderable} />
        </div>
    );
};

export default UINavigationController;
