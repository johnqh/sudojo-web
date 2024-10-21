import React from 'react';
import { Box, Typography } from '@mui/material';
import { Renderable } from '../../../types/protocols';
import Sudojo from 'Sudojo';
import { ImageHelper } from '../../utils/ImageHelper';

const Tile: React.FC<{ renderable?: Renderable | null }> = ({ renderable }) => {
    const handleClick = () => {
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(
            renderable
        );
    };

    const imageUrl =
        renderable?.display?.image?.url ??
        ImageHelper.localImageUrl(renderable?.display?.image?.local);

    return (
        <Box
            sx={{
                width: '100%',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                aspectRatio: '3/4',
            }}
            onClick={handleClick}
        >
            {/* Image with 4:3 aspect ratio */}
            <Box
                component="div"
                sx={{
                    width: '100%',
                    aspectRatio: '4/3',
                    backgroundColor: imageUrl ? 'transparent' : 'gray',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0', // 0 margin on left, top, and right
                }}
            >
                {imageUrl ? (
                    <Box
                        component="img"
                        src={imageUrl}
                        alt={renderable?.display?.labels?.title?.text}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : (
                    <Typography variant="body2" color="white"></Typography>
                )}
            </Box>

            {/* Title 8px below image */}
            <Typography
                variant="h6"
                sx={{
                    fontSize: '17px',
                    marginTop: '8px',
                    marginX: '16px',
                    textAlign: 'center',
                }}
            >
                {renderable?.display?.labels?.title?.text}
            </Typography>

            {/* Text 8px below title */}
            <Typography
                variant="body2"
                sx={{
                    fontSize: '14px',
                    marginTop: '8px',
                    marginX: '16px',
                    textAlign: 'center',
                }}
            >
                {renderable?.display?.labels?.text?.text}
            </Typography>
        </Box>
    );
};

export default Tile;
