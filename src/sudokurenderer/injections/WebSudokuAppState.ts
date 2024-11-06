import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';
import RendererIO from '../../renderer/injections/RendererIO';
import Login from '../../renderer/injections/Login';
import Screen from '../../renderer/injections/Screen';
import { IRenderable } from '../../renderer/types/protocols';

class WebSudokuAppState extends Sudojo.com.sudobility.renderable.sudokuschool.statemanager
    .SudokuAppState {
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<IRenderable>) => void
    ) {
        super(
            // @ts-ignore
            new RendererIO(),
            new Login(),
            Sudojo.com.sudobility.renderable.sudokuschool.utils.Scrambler,
            new Screen(setCurrentId, setRoot)
        );
    }
}

export default WebSudokuAppState;
