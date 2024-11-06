import React from 'react';
import { UIDevice } from '../../../renderer/utils/UIDevice';
import { IRenderable } from '../../../renderer/types/protocols';
import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';

const JustText: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
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
            {renderable?.view?.withTitle()?.text}
        </div>
    );
};

export default JustText;
