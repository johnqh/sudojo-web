import React from 'react';
import { Renderable } from '../../../types/protocols';
import Sudojo from 'Sudojo';
import { ImageHelper } from '../../utils/ImageHelper';

const JustImage: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(
            renderable
        );
    };

    const imageUrl =
        renderable?.display?.image?.url ??
        ImageHelper.localImageUrl(renderable?.display?.image?.local);
    if (!imageUrl) {
        return null;
    }

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
        objectFit: 'cover', // This will now be properly typed
    };

    return (
        <div style={containerStyle}  onClick={handleClick}>
            <img src={imageUrl} alt="Just an image" style={imageStyle} />
        </div>
    );
};

export default JustImage;