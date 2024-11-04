import React from 'react';
import { Box, Grid } from '@mui/material';
import * as Sudojo from 'Sudojo';
import UICollectionViewSection from './UICollectionViewSection';
import { IRenderable, ViewLayout } from '../../../types/protocols';
import Renderer from './Renderer';
import { Nullable } from 'Sudojo';

const UICollectionView: React.FC<{
    renderable?: Nullable<IRenderable>;
    columns?: number;
}> = ({ renderable, columns = 4 }) => {
    // Calculate the grid size based on the number of columns (12 is the total grid width in Material UI)
    const gridSize = Math.floor(12 / columns);

    return renderable?.view?.layout ==
        ViewLayout.Companion
            .LIST_SECTIONED ? (
        <Box sx={{ width: '100%' }}>
            {renderable?.view?.withChildren()?.map((child, index) => (
                <UICollectionViewSection key={child.id} renderable={child} />
            ))}
        </Box>
    ) : (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {renderable?.view?.withChildren()?.map((child, index) => (
                    <Grid item xs={12} sm={6} md={gridSize} key={index}>
                        <Renderer key={child.id} renderable={child} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default UICollectionView;
