import React from 'react';
import { Renderable } from '../../../types/protocols';
import NavigationBreadcrumbs from '../views/NavigationBreadcrumbs';
import ViewController from './ViewController';

const UINavigationController: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    console.log('UINavigationController: ' + renderable);
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
            <ViewController renderable={renderable} />
        </div>
    );
};

export default UINavigationController;
