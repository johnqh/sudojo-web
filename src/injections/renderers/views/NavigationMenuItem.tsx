import React from 'react';
import { UIDevice } from '../../utils/UIDevice';
import { Renderable } from '../../../types/protocols';
import Sudojo from 'Sudojo';
import JustImage from './JustImage';

const NavigationMenuItem: React.FC<{
    renderable?: Renderable | null;
    isSelected?: boolean;
}> = ({ renderable, isSelected }) => {
    const handleClick = () => {
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(
            renderable
        );
    };

    const isIOS = UIDevice.isIOSOrIPad();
    const height = isIOS ? 44 : 48;

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        paddingLeft: '16px', // 16 pts left margin
        boxSizing: 'border-box',
        height: `${height}px`,
        backgroundColor: isSelected ? 'black' : 'white',
        color: isSelected ? 'white' : 'black',
    };

    const imageStyle: React.CSSProperties = {
        width: '32px',
        height: '32px',
        marginRight: '8px', // 8px gap between image and text
    };

    const textStyle: React.CSSProperties = {
        fontSize: '16px', // Font size for text
    };

    return (
        <div onClick={handleClick} style={containerStyle}>
            <div style={imageStyle}>
                <JustImage renderable={renderable} />
            </div>
            <span style={textStyle}>
                {renderable?.display?.labels?.title?.text}
            </span>
        </div>
    );
};

export default NavigationMenuItem;
