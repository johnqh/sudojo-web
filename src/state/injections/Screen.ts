import * as Sudojo  from 'Sudojo';
import { Nullable } from 'Sudojo';
import { IRenderable, IDisplay } from '../../types/protocols';

class Screen implements IDisplay {
    static shared?: Nullable<Screen> = null
    
    focused: Nullable<
        (p0: IRenderable) => void
        >;
    
    private _currentId: Nullable<string> = null
    private _root: Nullable<IRenderable> = null
    private _setCurrentId: Nullable<(currentId: Nullable<string>) => void> = null
    private _setRoot: Nullable<(renderable: Nullable<IRenderable>) => void> = null
    
    constructor(
        setCurrentId: (currentId: Nullable<string>) => void,
        setRoot: (renderable: Nullable<IRenderable>) => void,
    ) {
        this._setCurrentId = setCurrentId;
        this._setRoot = setRoot;
        Screen.shared = this
    }

    top(): Nullable<IRenderable> {
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

    current(): Nullable<IRenderable> {
        const top = this.top();
        const currentId = this.currentId()
        if (currentId) {
            return top?.findById(currentId)
        } else {
            return null
        }
    }

    root(
        renderable: Nullable<IRenderable>,
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
        renderable: Nullable<IRenderable>,
        parent: Nullable<IRenderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        this.goto(renderable)
    }

    pop(
        renderable: Nullable<IRenderable>,
        parent: Nullable<IRenderable>,
        animated?: boolean
    ): void {
        this.goto(parent)
    }

    prompt(
        renderable: Nullable<IRenderable>,
        parent: Nullable<IRenderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        this.goto(renderable)
    }

    dismiss(
        renderable: Nullable<IRenderable>,
        parent: Nullable<IRenderable>,
        animated?: boolean
    ): void {
        this.goto(parent)
    }

    private goto(renderable: Nullable<IRenderable>) {
        this.setCurrentId(renderable?.id);
        const focused = this.focused;
        if (focused && renderable) {
            focused(renderable)
        }
    }

    message(
        message: Sudojo.com.sudobility.renderable.renderable.protocols.ScreenMessage,
        blocking?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    toast(message: Sudojo.com.sudobility.renderable.renderable.protocols.ScreenMessage): void {
        throw new Error('Method not implemented.');
    }
    confirm(
        message: Sudojo.com.sudobility.renderable.renderable.protocols.ScreenMessage,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    choose(
        message: Sudojo.com.sudobility.renderable.renderable.protocols.ScreenMessage,
        params: Sudojo.com.sudobility.renderable.renderable.utils.Params,
        completion?: Nullable<(p0: string) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    update(
        renderable: Nullable<Sudojo.com.sudobility.renderable.renderable.Renderable>,
        animated?: boolean
    ): void {
        this.root(renderable)
    }
}

export default Screen;
