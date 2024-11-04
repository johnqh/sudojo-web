import { Nullable } from 'Sudojo';
import { IRenderable } from '../../../types/protocols';
import Action from './Action';
import CenteredText from './CenteredText';
import ImageAndText from './ImageAndText';
import JustText from './JustText';
import TextAndSelect from './TextAndSelect';
import TextAndToggle from './TextAndToggle';
import UICollectionView from './UICollectionView';
import UITableView from './UITableView';
import Waiting from './Waiting';
import Web from './Web';

export default class ViewMapping {
    static shared?: ViewMapping;

    static defaultMap: {
        [key: string]: React.FC<{ renderable?: Nullable<IRenderable> }>;
    } = {
        action: Action,
        center: CenteredText,
        center_image: ImageAndText,
        grid_sectioned: UICollectionView,
        grid_simple: UICollectionView,
        image: ImageAndText,
        list_sectioned: UITableView,
        list_simple: UITableView,
        select: TextAndSelect,
        text: JustText,
        title: JustText,
        toggle: TextAndToggle,
        waiting: Waiting,
        web: Web,
    };

    static defaultAnd(more: {
        [key: string]: React.FC<{ renderable?: Nullable<IRenderable> }>;
    }): ViewMapping {
        let defaultMapping = this.defaultMap;
        let modified = { ...defaultMapping, ...more };
        return new ViewMapping(modified);
    }

    public readonly mapping: {
        [key: string]: React.FC<{ renderable?: Nullable<IRenderable> }>;
    } = {};

    constructor(initialMapping: {
        [key: string]: React.FC<{ renderable?: Nullable<IRenderable> }>;
    }) {
        this.mapping = { ...initialMapping };
    }

    public get(
        key?: string | null
    ): React.FC<{ renderable?: Nullable<IRenderable> }> | undefined {
        if (!key) return undefined;
        return this.mapping[key];
    }
}
