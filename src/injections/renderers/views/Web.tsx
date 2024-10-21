import React from 'react';
import { Renderable } from '../../../types/protocols';

const WebView: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const url = renderable?.display?.url;
    if (!url) return null;

    return (
        <iframe
            src={renderable?.display?.url}
            title="Web View"
            style={{
                width: '100%',
                height: '100vh', // Make it take full height of the viewport or parent
                border: 'none', // Remove the border for a clean look
            }}
        />
    );
};

export default WebView;
