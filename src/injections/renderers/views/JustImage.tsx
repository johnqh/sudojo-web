import React, { useEffect, useState } from 'react';
import { Renderable } from '../../../types/protocols';
import { ImageHelper } from '../../utils/ImageHelper';
import * as Sudojo from 'renderable';

const JustImage: React.FC<{ renderable?: Renderable | null }> = ({
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

    if (!imageUrl) {
        return null;
    }

    // Determine if the file is an SVG
    const isSVG = imageUrl.endsWith('.svg');

    // Define styles using React.CSSProperties
    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'contain', // Ensure it maintains aspect ratio and fits within the container
    };

    return (
        <div style={containerStyle} onClick={handleClick}>
            {isSVG ? (
                // Render the SVG using the <img> tag
                <img
                    src={imageUrl}
                    alt="SVG Image"
                    style={imageStyle}
                />
            ) : (
                // Render PNG or JPEG with an <img> tag
                <img
                    src={imageUrl}
                    alt="Just an image"
                    style={imageStyle}
                />
            )}
        </div>
    );
};

export default JustImage;