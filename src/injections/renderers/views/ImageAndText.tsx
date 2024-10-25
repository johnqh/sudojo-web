import React from 'react';
import { Box, Typography } from '@mui/material';
import { UIDevice } from '../../utils/UIDevice';
import { Renderable } from '../../../types/protocols';
import { ImageHelper } from '../../utils/ImageHelper';
import * as Sudojo from 'renderable';

const ImageAndText: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance?.navigate(
            renderable
        );
    };
    const imageUrl =
        renderable?.display?.image?.url ??
        ImageHelper.localImageUrl(renderable?.display?.image?.local);

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
                    alt={renderable?.display?.labels?.title?.text}
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
                    {renderable?.display?.labels?.title?.text}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ fontSize: '14px', color: 'darkgray' }}
                >
                    {renderable?.display?.labels?.text?.text}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImageAndText;
