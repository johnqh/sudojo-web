import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ViewController from './ViewController';
import Sudojo, { Nullable } from 'Sudojo';
import { Renderable } from '../../../types/protocols';
import WebSudokuAppState from '../../../state/WebSudokuAppState';
import Footer from '../../../components/Footer';
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
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance =
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
            <ViewController renderable={renderable} />
        </Box>
    );
};

export default UIWindow;
