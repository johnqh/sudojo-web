import { Nullable } from "Sudojo";
import { ThemeColor } from "../../types/protocols";
import { UIColorType } from "../../utils/UIColor";
import { UIDevice } from "../../utils/UIDevice";
import * as Sudojo from "Sudojo";

export class RendererColor {
	static isIOS = UIDevice.isIOSOrIPad();
    static color(
        colors: UIColorType,
		themeColor: Nullable<Sudojo.com.sudobility.renderable.renderable.utils.ThemeColor>
    ): Nullable<string> {
        
		switch (themeColor) {
			case ThemeColor.NONE:
			case ThemeColor.CLEAR:
				return colors.clear

			case ThemeColor.SELECTED:
				return colors.systemPurple;

			case ThemeColor.SUCCESS:
				return colors.systemBlue;

			case ThemeColor.WARNING_SECONDARY:
				return colors.systemYellow;

			case ThemeColor.WARNING:
				return colors.systemOrange;

			case ThemeColor.ERROR:
				return colors.systemRed;

			case ThemeColor.BACKGROUND:
				return colors.systemBackground; // Equivalent to UIColor.systemBackground

			case ThemeColor.BACKGROUND_SECONDARY:
				return colors.secondarySystemBackground; // Equivalent to UIColor.secondarySystemBackground

			case ThemeColor.LABEL:
				return colors.label; // Equivalent to UIColor.label

			case ThemeColor.LABEL_SECONDARY:
				return colors.secondaryLabel; // Equivalent to UIColor.secondaryLabel

			case ThemeColor.ACTION_TEXT:
				return colors.link; // Equivalent to UIColor.link

			case ThemeColor.DISABLED:
				return colors.systemGray;

			default:
				return null;
		}
	}
}
