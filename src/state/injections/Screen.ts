import { Nullable, com } from 'Sudojo';
import { ScreenProtocol } from '../../types/protocols';

class Screen implements ScreenProtocol {
    focused: Nullable<
        (p0: com.sudobility.sudokuschool.viewmodels.Renderable) => void
    >;
    top(): Nullable<com.sudobility.sudokuschool.viewmodels.Renderable> {
        throw new Error('Method not implemented.');
    }
    current(): Nullable<com.sudobility.sudokuschool.viewmodels.Renderable> {
        throw new Error('Method not implemented.');
    }
    root(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    push(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    pop(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        throw new Error('Method not implemented.');
    }
    prompt(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        throw new Error('Method not implemented.');
    }
    dismiss(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        throw new Error('Method not implemented.');
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
