import React from 'react';
import { Renderable } from '../../../types/protocols';
import NavigationBreadcrumbs from '../views/NavigationBreadcrumbs';
import ViewController from './ViewController';
import UIColor from '../utils/UIColor';
import { Nullable } from 'Sudojo';

const UINavigationController: React.FC<{ renderable?: Nullable<Renderable>, currentId?: Nullable<string> }> = ({
    renderable,
    currentId,
}) => {
    console.log('UINavigationController: ' + renderable);

    if (!currentId) {
        return null
    }
    const display = renderable?.findById(currentId)
    if (!display) {
        return null
    }
    
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
            <ViewController renderable={display} currentId={currentId} />
        </div>
    );
};

export default UINavigationController;
