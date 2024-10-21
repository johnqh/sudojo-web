import { Nullable, com } from 'Sudojo';
import { Renderable, ScreenProtocol } from '../../types/protocols';
import { useState } from 'react';

class Screen implements ScreenProtocol {
    focused: Nullable<
        (p0: com.sudobility.sudokuschool.viewmodels.Renderable) => void
    >;

    top(): Nullable<com.sudobility.sudokuschool.viewmodels.Renderable> {
        const [renderable, _] = useState<Nullable<Renderable>>(null);
        return renderable
    }

    current(): Nullable<com.sudobility.sudokuschool.viewmodels.Renderable> {
        const [current, _] = useState<Nullable<string>>(null);
        if (!current) {
            return null
        }
        const [renderable, __] = useState<Nullable<Renderable>>(null);
        return renderable?.findById(current)
    }

    root(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        const [_, setRenderable] = useState<Nullable<Renderable>>(null);
        setRenderable(renderable);
    }

    push(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        const [_, setCurrent] = useState<Nullable<string>>(null);
        setCurrent(renderable?.id);
    }

    pop(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        const [_, setCurrent] = useState<Nullable<string>>(null);
        setCurrent(renderable?.parent?.id);
    }

    prompt(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean,
        completion?: Nullable<(p0: boolean) => void>
    ): void {
        const [_, setCurrent] = useState<Nullable<string>>(null);
        setCurrent(renderable?.id);
    }

    dismiss(
        renderable: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        parent: Nullable<com.sudobility.sudokuschool.viewmodels.Renderable>,
        animated?: boolean
    ): void {
        const [_, setCurrent] = useState<Nullable<string>>(null);
        setCurrent(renderable?.parent?.id);
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
