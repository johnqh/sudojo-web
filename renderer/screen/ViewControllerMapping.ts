import { Nullable } from "Sudojo";
import { IRenderable } from "../types/protocols";
import UITabBarController from "./UITabBarController";
import UIViewController from "./UIViewController";

export default class ViewControllerMapping {
	static shared?: ViewControllerMapping;

	static defaultMap: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			isDarkMode: boolean;
			currentId?: Nullable<string>;
		}>;
	} = {
		root: UITabBarController,
		tabs: UITabBarController,
	};

	static defaultAnd(more: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			isDarkMode: boolean;
			currentId?: Nullable<string>;
		}>;
	}): ViewControllerMapping {
		let defaultMapping = this.defaultMap;
		let modified = { ...defaultMapping, ...more };
		return new ViewControllerMapping(modified);
	}

	public readonly mapping: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			isDarkMode: boolean;
			currentId?: Nullable<string>;
		}>;
	} = {};

	constructor(initialMapping: {
		[key: string]: React.FC<{
			renderable?: Nullable<IRenderable>;
			isDarkMode: boolean;
			currentId?: Nullable<string>;
		}>;
	}) {
		this.mapping = { ...initialMapping };
	}

	public get(key?: string | null):
		| React.FC<{
			renderable?: Nullable<IRenderable>;
			isDarkMode: boolean;
				currentId?: Nullable<string>;
		  }>
		| undefined {
		console.log(key)
		if (!key) return undefined;
		return this.mapping[key] ?? UIViewController;
	}
}
