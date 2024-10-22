import Sudojo, { Nullable } from 'Sudojo';
import IO from './injections/IO';
import Login from './injections/Login';
import Screen from './injections/Screen';
import { Renderable } from '../types/protocols';

class WebSudokuAppState extends Sudojo.com.sudobility.sudokuschool.statemanager
    .SudokuAppState {
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<Renderable>) => void
    ) {
        super(
            // @ts-ignore
            new IO(),
            new Login(),
            Sudojo.com.sudobility.sudokuschool.utils.Scrambler,
            new Screen(setCurrentId, setRoot)
        );
    }
}

export default WebSudokuAppState;
