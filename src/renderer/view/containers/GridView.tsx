import React from 'react';
import { Box, Grid } from '@mui/material';
import { IRenderable, ViewLayout } from '../../../types/protocols';
import Renderer from '../renderers/Renderer';
import { Nullable } from 'Sudojo';
import * as Sudojo from "Sudojo";

const GridView: React.FC<{
    renderable?: Nullable<IRenderable>;
    isDarkMode: boolean;
    columns?: number;
}> = ({ renderable, isDarkMode, columns = 4 }) => {
    // Calculate the grid size based on the number of columns (12 is the total grid width in Material UI)
    const gridSize = Math.floor(12 / columns);

	let children: Nullable<IRenderable[]> = renderable?.view?.withChildren();
	if (!children || children.length === 0) {
		return null;
	}

	const sectioned =
		renderable?.view?.layout == ViewLayout.Companion.LIST_SECTIONED;

	const list: Nullable<IRenderable[]> = sectioned
		? Sudojo.com.sudobility.renderable.renderable.IRenderable.Companion.flatten(
				children
		  )
		: children;
	if (!list)
        return null
    
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {renderable?.view?.withChildren()?.map((child, index) => (
                    <Grid item xs={12} sm={6} md={gridSize} key={index}>
                        <Renderer key={child.id} renderable={child} isDarkMode={isDarkMode} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GridView;
