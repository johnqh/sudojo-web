import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';
import IO from './injections/IO';
import Login from './injections/Login';
import Screen from './injections/Screen';
import { IRenderable } from '../renderer/types/protocols';

class WebSudokuAppState extends Sudojo.com.sudobility.renderable.sudokuschool.statemanager
    .SudokuAppState {
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<IRenderable>) => void
    ) {
        super(
            // @ts-ignore
            new IO(),
            new Login(),
            Sudojo.com.sudobility.renderable.sudokuschool.utils.Scrambler,
            new Screen(setCurrentId, setRoot)
        );
    }
}

export default WebSudokuAppState;
