import React from 'react';
import { Renderable } from '../../../types/protocols';
import NavigationBreadcrumbs from '../views/NavigationBreadcrumbs';
import ViewController from './ViewController';
import UIColor from '../utils/UIColor';

const UINavigationController: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    console.log('UINavigationController: ' + renderable);
    
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%', // Full vertical height
        backgroundColor: UIColor(false).secondarySystemBackground,
    };

    return (
        <div style={containerStyle}>
            <NavigationBreadcrumbs renderable={renderable} />
            <ViewController renderable={renderable} />
        </div>
    );
};

export default UINavigationController;
