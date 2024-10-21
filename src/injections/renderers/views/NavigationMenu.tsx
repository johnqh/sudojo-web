import React from 'react';
import NavigationMenuItem from './NavigationMenuItem';
import { Renderable } from '../../../types/protocols';
import { List, ListItem } from '@mui/material';

const NavigationMenu: React.FC<{
    renderable?: Renderable | null;
    isSelected?: boolean;
}> = ({ renderable }) => {
    const children = renderable?.children;
    if (!children) {
        return null;
    }

    // Define styles using React.CSSProperties
    const containerStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '10px', // Optional padding for spacing
    };

    return (
        <div style={containerStyle}>
            <List>
                {children.map((child) => (
                    <ListItem>
                        <NavigationMenuItem
                            renderable={child}
                            isSelected={child.route == renderable.route}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default NavigationMenu;
