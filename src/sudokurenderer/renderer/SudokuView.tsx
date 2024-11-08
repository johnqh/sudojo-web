import React, { useRef, useEffect } from "react";
import { Nullable } from "Sudojo";
import { AppState, IRenderable } from "../../renderer/types/protocols";
import UIColor from "../../renderer/utils/UIColor";
import { RendererColor } from "../../renderer/view/renderers/RendererColor";

const SudokuView: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
	let colors = UIColor(asScreen);

	const canvasRef = useRef<HTMLCanvasElement>(null);

	// Redraw whenever the renderable changes
	useEffect(() => {
		if (canvasRef.current && renderable) {
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");
			if (context) {
				draw(context, canvas.getBoundingClientRect());
			}
		}
	}, [renderable]);

	const draw = (context: CanvasRenderingContext2D, rect: DOMRect) => {
		const block = renderable?.view?.withChildren()?.at(0)
		const cell = block?.view?.withChildren()?.at(0)
			
		processBlocks(rect, (renderable, drawRect, borderWidth) => {
			drawBlock(context, drawRect, renderable, 0);

			// Draw grid border
			const gridColor = getGridColor(0);
			if (gridColor) {
				context.strokeStyle = gridColor;
				context.lineWidth = borderWidth;
				context.strokeRect(
					drawRect.x - borderWidth / 2,
					drawRect.y - borderWidth / 2,
					drawRect.width,// + borderWidth,
					drawRect.height,// + borderWidth
				);
			}

			drawTextAtLevel(context, drawRect, renderable, 0);
		});
	};

	const processBlocks = (
		rect: DOMRect,
		callback: (
			renderable: IRenderable,
			rect: DOMRect,
			borderWidth: number
		) => void
	) => {
		if (renderable) {
			const borderWidth = 2.0;
			const drawRect = new DOMRect(
				0 + borderWidth,
				0 + borderWidth,
				rect.width - borderWidth * 2,
				rect.height - borderWidth * 2
			);
			callback(renderable, drawRect, borderWidth);
		}
	};

	const drawBlock = (
		context: CanvasRenderingContext2D,
		rect: DOMRect,
		renderable: IRenderable,
		level: number
	) => {
		processBlock(
			rect,
			renderable,
			level,
			(renderable, rect, level, childSize, grid) => {
				if (level !== 0) {
					drawBlockBackground(context, rect, renderable);
				}
				drawGrid(context, rect, renderable, childSize, grid, level);
			},
			(renderable, rect, level) => {
				drawBlock(context, rect, renderable, level);
			}
		);
	};

	const drawTextAtLevel = (
		context: CanvasRenderingContext2D,
		rect: DOMRect,
		renderable: IRenderable,
		level: number
	) => {
		const fontCache: { [key: number]: number } = {};

		processBlock(
			rect,
			renderable,
			level,
			(renderable, rect, level) => {
				let font = fontCache[level];
				if (!font) {
					font = calculateFont({
						width: rect.width,
						height: rect.height,
					});
					fontCache[level] = font;
				}
				drawText(context, rect, renderable, font);
			},
			(renderable, rect, level) => {
				drawTextAtLevel(context, rect, renderable, level);
			}
		);
	};

	const processBlock = (
		rect: DOMRect,
		renderable: IRenderable,
		level: number,
		processBackground: (
			renderable: IRenderable,
			rect: DOMRect,
			level: number,
			childSize: { width: number; height: number },
			grid: number
		) => void,
		processChild: (
			renderable: IRenderable,
			rect: DOMRect,
			level: number
		) => void
	) => {
		// Calculate the grid and child size
		const grid = getGrid(level);
		const childWidth = (rect.width - grid * 2) / 3;
		const childHeight = (rect.height - grid * 2) / 3;
		const childSize = { width: childWidth, height: childHeight };

		const children = renderable.view?.withChildren();
		const number = renderable.view?.withTitle()?.text;

		// Call the processBackground function
		processBackground(renderable, rect, level, childSize, grid);

		// If there are 9 children and the number is null, iterate over the children
		if (children && children.length === 9 && number == null) {
			iterateChildren(
				children,
				rect,
				childSize,
				grid,
				(child, childRect) => {
					processChild(child, childRect, level + 1);
				}
			);
		}
	};

	const drawBlockBackground = (
		context: CanvasRenderingContext2D,
		rect: DOMRect,
		renderable: IRenderable
	) => {
		const modifier = renderable.view?.withModifier();
		if (modifier?.bgColor) {
			const bgColor = RendererColor.color(colors, modifier.bgColor);
			if (bgColor) {
				context.fillStyle = bgColor;
				context.fillRect(rect.x, rect.y, rect.width, rect.height);
			}
		}
		if (modifier?.borderColor) {
			const borderColor = RendererColor.color(
				colors,
				modifier.borderColor
			);
			if (borderColor) {
				const borderWidth = 2;
				context.strokeStyle = borderColor;
				context.lineWidth = borderWidth;
				context.strokeRect(
					rect.x + borderWidth / 2,
					rect.y + borderWidth / 2,
					rect.width - borderWidth,
					rect.height - borderWidth
				);
			}
		}
	};

	const drawGrid = (
		context: CanvasRenderingContext2D,
		rect: DOMRect,
		renderable: IRenderable,
		childSize: { width: number; height: number },
		grid: number,
		level: number
	) => {
		const gridColor = getGridColor(level);
		if (gridColor) {
			context.strokeStyle = gridColor;
			context.lineWidth = 1; // You can adjust the line width as needed

			// Draw horizontal and vertical grid lines
			for (let i = 1; i < 3; i++) {
				// Horizontal grid lines
				const y = rect.y + i * (childSize.height + grid) - grid / 2;
				context.beginPath();
				context.moveTo(rect.x, y);
				context.lineTo(rect.x + rect.width, y);
				context.stroke();

				// Vertical grid lines
				const x = rect.x + i * (childSize.width + grid) - grid / 2;
				context.beginPath();
				context.moveTo(x, rect.y);
				context.lineTo(x, rect.y + rect.height);
				context.stroke();
			}
		}
	};

	const getGridColor = (level: number) => {
		switch (level) {
			case 0:
				return colors.label; // Label color
			case 1:
				return colors.secondaryLabel; // Gray color
			default:
				return null;
		}
	};

	const getGrid = (level: number): number => {
		switch (level) {
			case 0:
			case 1:
				return 1;
			default:
				return 0;
		}
	};

	const iterateChildren = (
		children: IRenderable[],
		parentRect: DOMRect,
		childSize: { width: number; height: number },
		grid: number,
		callback: (child: IRenderable, rect: DOMRect) => void
	) => {
		children.forEach((child, index) => {
			const row = Math.floor(index / 3);
			const col = index % 3;
			const x = parentRect.x + col * (childSize.width + grid);
			const y = parentRect.y + row * (childSize.height + grid);
			const childRect = new DOMRect(
				x,
				y,
				childSize.width,
				childSize.height
			);
			callback(child, childRect);
		});
	};

	const drawText = (
		context: CanvasRenderingContext2D,
		rect: DOMRect,
		renderable: IRenderable,
		fontSize: number
	) => {
		const title = renderable.view?.withTitle();
		if (title && title.text) {
			// Set the font and color
 			const color =
				RendererColor.color(
					UIColor(false),
					title.withModifier()?.color
				) ?? UIColor(false).label; // Default to 'black'
			context.font = `${fontSize}px Roboto`; // Adjust the font as needed
			context.fillStyle = color;
			context.textAlign = "center";
			context.textBaseline = "middle";

			// Calculate the position to center the text
			const x = rect.x + rect.width / 2;
			const y = rect.y + rect.height / 2;

			// Draw the text
			context.fillText(title.text, x, y);
		}
	};

	// Helper function to calculate font size
	const calculateFont = (size: { width: number; height: number }): number => {
		const minSize = Math.min(size.width, size.height);
		return minSize * 0.75; // 75% of the square size for font
	};

	const handleTouch = (rect: DOMRect, location: { x: number; y: number }) => {
		processBlocks(rect, (renderable, drawRect) => {
			touchCell(drawRect, renderable, 0, location);
		});
	};

	const touchCell = (
		rect: DOMRect,
		renderable: IRenderable,
		level: number,
		location: { x: number; y: number }
	) => {
		processBlock(
			rect,
			renderable,
			level,
			(renderable, rect, level) => {
				if (containsPoint(rect, location) && level === 2) {
					touched(renderable);
				}
			},
			(renderable, rect, level) => {
				if (containsPoint(rect, location) && level <= 2) {
					touchCell(rect, renderable, level, location);
				}
			}
		);
	};

	// Helper function to check if a point is inside a rectangle
	const containsPoint = (
		rect: DOMRect,
		point: { x: number; y: number }
	): boolean => {
		return (
			point.x >= rect.x &&
			point.x <= rect.x + rect.width &&
			point.y >= rect.y &&
			point.y <= rect.y + rect.height
		);
	};

	const touched = (renderable: IRenderable) => {
		AppState.Companion.instance?.navigate(renderable);
	};

	// Function to handle touch/click events
	const handleClick = (
		event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
	) => {
		const canvas = canvasRef.current;
		if (!canvas || !renderable) return;

		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		handleTouch(new DOMRect(0, 0, rect.width, rect.height), { x, y });
	};

	return (
		<canvas
			ref={canvasRef}
			width={500}
			height={500}
			style={{ border: "1px solid black", touchAction: "none" }}
			onClick={handleClick}
		/>
	);
};

export default SudokuView;
