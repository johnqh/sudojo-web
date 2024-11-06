import { Nullable } from "Sudojo";
import { AppState, IRenderable } from "../types/protocols";

export class DestinationHandler {
	// Static method to get the correct image source
	static handle(
		renderable: Nullable<IRenderable>,
		navigationCallback: (path: string) => void
    ) {
        const path = renderable?.screen?.route
        if (path) {
            navigationCallback(path)
        } else {
            AppState.Companion.instance?.navigate(renderable)
        }
    }
}
