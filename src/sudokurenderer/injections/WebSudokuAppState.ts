import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';
import RendererIO from '../../renderer/injections/RendererIO';
import Login from '../../renderer/injections/Login';
import Screen from '../../renderer/injections/Screen';
import { BuildType, DynamicLocalizer, IRenderable } from '../../renderer/types/protocols';

class WebSudokuAppState extends Sudojo.com.sudobility.renderable.sudokuschool.statemanager
    .SudokuAppState {
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<IRenderable>) => void
    ) {
        let io = new RendererIO()
        const localizer = new DynamicLocalizer(
            // @ts-ignore
            io,
            'en',
            null,
            null,
        )
        
        super(
            Sudojo.com.sudobility.renderable.renderable.state.BuildType.DEBUG, 
            // @ts-ignore
            io,
            new Login(),
            Sudojo.com.sudobility.renderable.sudokuschool.utils.Scrambler,
            new Screen(setCurrentId, setRoot),
            localizer,
        );
    }
}

export default WebSudokuAppState;
