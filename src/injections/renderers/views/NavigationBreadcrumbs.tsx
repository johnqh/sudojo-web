import React from 'react';
import { IRenderable } from '../../../types/protocols';
import { UIDevice } from '../../utils/UIDevice';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';

const NavigationBreadcrumbs: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
    renderable,
}) => {
    const items = renderable?.breadcrumbs();
    if (!items) {
        return null
    }

    const handleClick = (renderable?: Nullable<IRenderable>) => {
        Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance?.navigate(
            renderable
        );
    };

    const containerStyle: React.CSSProperties = {
        height: UIDevice.isIOSOrIPad() ? '44px' : '48px',
        display: 'flex',
        alignItems: 'center',
        padding: '0px',
        width: '100%',
        margin: '0', // No margin on top, left, or right
        justifyContent: 'start', // Align breadcrumbs to the left
    };

    return (
        <Box style={containerStyle}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ margin: '0', padding: '0' }}>
            {items.map((item, index) => (
                index < items.length - 1 ? (
                    <Link
                        key={index}
                        color="inherit"
                        onClick={() => handleClick(item)}
                        style={{ cursor: 'pointer' }} // Add cursor pointer for links
                    >
                        {item.view?.withSubtitle()?.text}
                    </Link>
                ) : (
                    // The last item is usually not clickable, so use Typography
                    <Typography key={index} color="textPrimary">
                        {item.view?.withSubtitle()?.text}
                    </Typography>
                )
            ))}
            </Breadcrumbs>
        </Box>
    );
};

export default NavigationBreadcrumbs;
