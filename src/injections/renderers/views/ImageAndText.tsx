import React from 'react';
import { Box, Typography } from '@mui/material';
import { UIDevice } from '../../utils/UIDevice';
import { IRenderable } from '../../../types/protocols';
import { ImageHelper } from '../../utils/ImageHelper';
import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';

const ImageAndText: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance?.navigate(
            renderable
        );
    };
    const imageUrl =
        renderable?.view?.withImage()?.withUrl() ??
        ImageHelper.localImageUrl(renderable?.view?.withImage()?.withLocal());

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: UIDevice.isIOSOrIPad() ? '44px' : '48px', // Height based on the device type
                paddingRight: '16px', // Right margin for the text
            }}
            onClick={handleClick}
        >
            {/* Image, only render if it's provided */}
            {imageUrl && (
                <Box
                    component="img"
                    src={imageUrl}
                    alt={renderable?.view?.withTitle()?.text}
                    sx={{
                        width: '32px',
                        height: '32px',
                        marginLeft: '16px', // 16 pt left margin for the image
                    }}
                />
            )}

            {/* Title and text */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    ml: imageUrl ? 2 : 0,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontSize: '17px', color: 'black', mr: 1 }}
                >
                    {renderable?.view?.withTitle()?.text}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ fontSize: '14px', color: 'darkgray' }}
                >
                    {renderable?.view?.withSubtitle()?.text}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImageAndText;
