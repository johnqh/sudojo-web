import { Renderable } from '../../../types/protocols';
import UITabBarController from './UITabBarController';
import UIViewController from './UIViewController';

export default class ViewControllerMapping {
    static shared?: ViewControllerMapping;

    static defaultMap: {
        [key: string]: React.FC<{ renderable?: Renderable | null }>;
    } = {
        nav: UITabBarController,
    };

    static defaultAnd(more: {
        [key: string]: React.FC<{ renderable?: Renderable | null }>;
    }): ViewControllerMapping {
        let defaultMapping = this.defaultMap;
        let modified = { ...defaultMapping, ...more };
        return new ViewControllerMapping(modified);
    }

    public readonly mapping: {
        [key: string]: React.FC<{ renderable?: Renderable | null }>;
    } = {};

    constructor(initialMapping: {
        [key: string]: React.FC<{ renderable?: Renderable | null }>;
    }) {
        this.mapping = { ...initialMapping };
    }

    public get(
        key?: string | null
    ): React.FC<{ renderable?: Renderable | null }> | undefined {
        if (!key) return undefined;
        return this.mapping[key] ?? UIViewController;
    }
}
