import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ViewController from './ViewController';
import  { Nullable } from 'renderable';
import * as Sudojo from 'renderable';
import { Renderable } from '../../../types/protocols';
import WebSudokuAppState from '../../../state/WebSudokuAppState';
import UIColor from '../utils/UIColor';

const UIWindow: React.FC<{  }> = ({
}) => {
    const [currentId, setCurrentId] = useState<Nullable<string>>(null);
    const [renderable, setRenderable] = useState<Nullable<Renderable>>(null);
    useEffect(() => {
        const _setCurrentId = (param: Nullable<string>) => {
            setCurrentId(param);
        };
        const _setRenderable = (param: Nullable<Renderable>) => {
            setRenderable(param);
        };
        Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance =
            new WebSudokuAppState(_setCurrentId, _setRenderable);
        return () => {};
    }, []);

    console.log("UIWindow: " + renderable)

    // Define styles using React.CSSProperties
    const containerStyle: React.CSSProperties = {
        backgroundColor: UIColor(false).systemBackground,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    };

    return (
        <Box style={containerStyle}>
            <ViewController renderable={renderable} currentId={currentId} />
        </Box>
    );
};

export default UIWindow;
