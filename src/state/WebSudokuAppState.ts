import * as Sudojo from 'renderable';
import { Nullable } from 'renderable';
import IO from './injections/IO';
import Login from './injections/Login';
import Screen from './injections/Screen';
import { Renderable } from '../types/protocols';

class WebSudokuAppState extends Sudojo.com.sudobility.renderable.sudokuschool.statemanager
    .SudokuAppState {
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<Renderable>) => void
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
