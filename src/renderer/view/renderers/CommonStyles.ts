import { Nullable } from "Sudojo";
import UIColor from "../../utils/UIColor";
import { UIDevice } from "../../utils/UIDevice";

type CommonStylesProps = {
	isDarkMode: boolean;
	isActive?: boolean;
    isClickable?: boolean;
    bgColor: Nullable<string>;
    activeBgColor: Nullable<string>;
};

class CommonStyles {
    static isIOS = UIDevice.isIOSOrIPad();
    static minHeight = CommonStyles.isIOS ? 44 : 48;

	static containerStyle({
		isDarkMode,
		isActive = false,
        isClickable = false,
        bgColor = null,
        activeBgColor = null,
	}: CommonStylesProps): React.CSSProperties {
		const colors = UIColor(isDarkMode);
		return {
			backgroundColor: isActive
				? (activeBgColor ?? colors.secondarySystemBackground)
				: (bgColor ?? colors.tableCellBackground),
			width: "100%",
			minHeight: `${CommonStyles.minHeight}px`,
			display: "flex",
			alignItems: "center",
			padding: "8px 16px",
			cursor: isClickable ? "pointer" : "default",
			transition: "background-color 0.2s ease",
		};
	}

	static textStyle(
		color: string,
		fontSize: number,
	): React.CSSProperties {
		return {
			color: color,
			fontFamily: "Roboto, sans-serif",
			fontSize: `${fontSize}px`,
		};
	}

	static lineTitleStyle(
		color: string,
		fontSize: number = 17,
	): React.CSSProperties {
		return this.textStyle(
			(color = color),
			(fontSize = fontSize),
		);
	}

	static lineSubtitleStyle(
		color: string,
		fontSize: number = 12,
	): React.CSSProperties {
		return this.textStyle(
			(color = color),
			(fontSize = fontSize),
		);
	}

	static lineValueTextStyle(
		color: string,
		fontSize: number = 17,
	): React.CSSProperties {
		return this.textStyle(
			(color = color),
			(fontSize = fontSize),
		);
	}

	static lineDetailsStyle(
		color: string,
		fontSize: number = 17,
	): React.CSSProperties {
		return this.textStyle(
			(color = color),
			(fontSize = fontSize),
		);
    }


    static inputStyle(
        color: string,
        backgroundColor: string,
		fontSize: number = 17,
	): React.CSSProperties {
        return {
            ...CommonStyles.lineTitleStyle(color, 14), // Using line title style for input
            backgroundColor: backgroundColor, // Background color of the input field
            padding: "8px", // Padding within the input field
            border: "none", // No border
            borderRadius: "4px", // Optional: rounds corners of the input field
            width: "100%", // Full width
            boxSizing: "border-box", // Ensures padding is included in the width
        }
    }

    
	static lineImageStyle: React.CSSProperties = {
		width: "32px",
		height: "32px",
		objectFit: "cover", // Crops the image if not square
		marginRight: "8px", // Space between image and title
	};
}

export default CommonStyles;
