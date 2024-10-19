import React from 'react';
import { List, ListItem } from '@mui/material';
import { Renderable } from '../../types/protocols';
import Sudojo from 'Sudojo';
import UITableViewSection from './UITableViewSection';
import Renderer from './Renderer';

const UITableView: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    let children = renderable?.children;
    if (!children || children.length === 0) {
        return null;
    }

    return renderable?.display?.presentation?.asScreen?.view?.layout ==
        Sudojo.com.sudobility.sudokuschool.viewmodels.Layout.Companion
            .LIST_SECTIONED ? (
        <List>
            {children.map((child, index) => (
                <UITableViewSection key={child.id} renderable={child} />
            ))}
        </List>
    ) : (
        <List>
            {children.map((child, index) => (
                <ListItem key={child.id}>
                    <Renderer renderable={child} /> {}
                </ListItem>
            ))}
        </List>
    );
};

export default UITableView;
