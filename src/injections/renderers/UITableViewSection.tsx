import React from 'react';
import SectionHeader from './SectionHeader'; // Assuming you have the SectionHeader component
import { Renderable } from '../../types/protocols';
import { ListItem } from '@mui/material';
import Renderer from './Renderer';

const UITableViewSection: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    return (
        <>
            <SectionHeader renderable={renderable} />

            {/* List of TitleRows */}
            {renderable?.children?.map((child, index) => (
                <ListItem key={index}>
                    <Renderer renderable={child} />
                </ListItem>
            ))}
        </>
    );
};

export default UITableViewSection;
