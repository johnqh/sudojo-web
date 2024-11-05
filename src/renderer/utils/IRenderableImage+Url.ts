import { Nullable } from "Sudojo";
import { IRenderableImage } from "../../types/protocols";
import { ImageHelper } from "../../injections/utils/ImageHelper";

export function imageUrlOf(image: Nullable<IRenderableImage>): Nullable<string> {
	return image?.withUrl() ?? ImageHelper.localImageUrl(image?.withLocal());
}
