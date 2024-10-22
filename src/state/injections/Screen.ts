import { Nullable, com } from 'Sudojo';
import { Renderable, ScreenProtocol } from '../../types/protocols';

class Screen implements ScreenProtocol {
    focused: Nullable<
        (p0: com.sudobility.sudokuschool.viewmodels.Renderable) => void
        >;
    
    private _currentId: Nullable<string> = null
    private _root: Nullable<Renderable> = null
    private _setCurrentId: Nullable<(currentId: Nullable<string>) => void> = null
    private _setRoot: Nullable<(renderable: Nullable<Renderable>) => void> = null
    
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<Renderable>) => void,
    ) {
        this._setCurrentId = setCurrentId;
        this._setRoot = setRoot;
    }

    top(): Nullable<com.sudobility.sudokuschool.viewmodels.Renderable> {
        return this._root;
    }

    private currentId(): Nullable<string> {
        return this._currentId
    }

    private setCurrentId(currentId: Nullable<string>) {
        this._currentId = currentId;
        const _setCurrentId = this._setCurrentId;
        if (_setCurrentId) {
            _setCurrentId(currentId);
        }
    }

    current(): Nullable<com.sudobility.sudokuschool.viewmodels.Renderable> {
        const top = this.top();
        const currentId = this.currentId()
        if (currentId) {
            return top?.findById(currentId)
        } else {
            return null
        }
    }

    root(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        this._root = renderable;
        const _setRoot = this._setRoot;
        if (_setRoot) {
            _setRoot(renderable);
        }
    }

    push(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        this.setCurrentId(renderable?.id);
    }

    pop(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        this.setCurrentId(renderable?.parent?.id);
    }

    prompt(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        this.setCurrentId(renderable?.id);
    }

    dismiss(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        this.setCurrentId(renderable?.parent?.id);
    }

    message(
        message: com.sudobility.sudokuschool.protocols.ScreenMessage,
        blocking?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    toast(message: com.sudobility.sudokuschool.protocols.ScreenMessage): void {
        throw new Error('Method not implemented.');
    }
    confirm(
        message: com.sudobility.sudokuschool.protocols.ScreenMessage,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    choose(
        message: com.sudobility.sudokuschool.protocols.ScreenMessage,
        params: com.sudobility.sudokuschool.utils.Params,
        completion?: Nullable<(p0: string) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    update(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        throw new Error('Method not implemented.');
    }
}

export default Screen;
