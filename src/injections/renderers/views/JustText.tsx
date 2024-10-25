import React from 'react';
import { UIDevice } from '../../utils/UIDevice';
import { Renderable } from '../../../types/protocols';
import * as Sudojo from 'renderable';

const JustText: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance?.navigate(
            renderable
        );
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '16px',
        fontSize: '22px',
        cursor: 'pointer',
        height: UIDevice.isIOSOrIPad() ? '44px' : '48px',
    };

    return (
        <div style={containerStyle} onClick={handleClick}>
            {renderable?.display?.labels?.title?.text}
        </div>
    );
};

export default JustText;
