import React from 'react';
import SectionHeader from './SectionHeader'; // Assuming you have the SectionHeader component
import { IRenderable } from '../../../types/protocols';
import { ListItem } from '@mui/material';
import Renderer from './Renderer';
import { Nullable } from 'Sudojo';

const UITableViewSection: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
    renderable,
}) => {
    let children = renderable?.view?.withChildren()
    return (
        <>
            <SectionHeader renderable={renderable} />

            {/* List of TitleRows */}
            {children?.map((child, index) => (
                <ListItem key={index}>
                    <Renderer renderable={child} />
                </ListItem>
            ))}
        </>
    );
};

export default UITableViewSection;
