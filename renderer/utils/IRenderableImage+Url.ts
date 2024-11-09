import { Nullable } from "Sudojo";
import { IRenderableImage } from "../types/protocols";
import { ImageHelper } from "./ImageHelper";

export function imageUrlOf(image: Nullable<IRenderableImage>): Nullable<string> {
	return image?.withUrl() ?? ImageHelper.localImageUrl(image?.withLocal());
}
