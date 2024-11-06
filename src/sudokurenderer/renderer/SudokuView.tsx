import React, { useRef, useEffect, useCallback } from 'react';

import { AppState, IRenderable } from '../../renderer/types/protocols';
import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';

// Utility function to get color from string or default
const getColor = (color?: string, defaultColor: string = '#000000'): string => {
    return color || defaultColor;
};

const SudokuView: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Font cache to store calculated font sizes by level
    const fontCache = useRef<{ [key: number]: string }>({});

    // Helper function to calculate font size based on cell size
    const calculateFontSize = (cellWidth: number, cellHeight: number): string => {
        const minSize = Math.min(cellWidth, cellHeight);
        return `${minSize * 0.75}px Arial`;
    };

    // Function to handle navigation
    const handleNavigate = (renderable: IRenderable) => {
        AppState.Companion.instance?.navigate(
            renderable
        );
    };

    // Function to draw text on the canvas
    const drawText = (
        ctx: CanvasRenderingContext2D,
        text: string,
        x: number,
        y: number,
        color: string,
        fontSize: string
    ) => {
        ctx.fillStyle = color;
        ctx.font = fontSize;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
    };

    // Function to draw grid lines
    const drawGrid = (ctx: CanvasRenderingContext2D, rect: DOMRect, gridSize: number) => {
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 1;

        // Draw thicker lines for the main Sudoku grid (every 3 cells)
        for (let i = 1; i < 3; i++) {
            const x = rect.x + i * (rect.width / 3);
            const y = rect.y + i * (rect.height / 3);

            // Horizontal lines
            ctx.beginPath();
            ctx.moveTo(rect.x, y);
            ctx.lineTo(rect.right, y);
            ctx.stroke();

            // Vertical lines
            ctx.beginPath();
            ctx.moveTo(x, rect.y);
            ctx.lineTo(x, rect.bottom);
            ctx.stroke();
        }
    };

    // Function to draw a single block/cell
    const drawBlock = (
        ctx: CanvasRenderingContext2D,
        rect: DOMRect,
        renderable: IRenderable,
        level: number
    ) => {
        let modifier = renderable.view?.withModifier()
        // Draw background color if provided
        if (modifier?.bgColor) {
            ctx.fillStyle = getColor(modifier?.bgColor?.rawValue, '#FFFFFF');
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        }

        // Draw border if provided
        if (modifier?.borderColor) {
            ctx.strokeStyle = getColor(modifier?.borderColor?.rawValue, '#000000');
            ctx.lineWidth = 2;
            ctx.strokeRect(rect.x + 1, rect.y + 1, rect.width - 2, rect.height - 2);
        }

        let title = renderable.view?.withTitle()
        // Draw text if available
        if (title?.text) {
            const fontSize = fontCache.current[level] || calculateFontSize(rect.width, rect.height);
            fontCache.current[level] = fontSize; // Cache the font size

            let labelModifier = title.withModifier()
            drawText(
                ctx,
                title.text,
                rect.x + rect.width / 2,
                rect.y + rect.height / 2,
                getColor(labelModifier?.color?.rawValue, '#000000'),
                fontSize
            );
        }

        // Draw grid lines within the cell if necessary
        drawGrid(ctx, rect, 3);
    };

    // Recursive function to process and draw blocks
    const processBlock = (
        ctx: CanvasRenderingContext2D,
        rect: DOMRect,
        renderable: IRenderable,
        level: number,
        gridSize: number
    ) => {
        // Draw the current block
        drawBlock(ctx, rect, renderable, level);

        let children = renderable?.view?.withChildren()
        // If there are child blocks, recursively draw them
        if (children && children.length === 9 && !renderable?.view?.withTitle()?.text) {
            const childWidth = (rect.width - gridSize * 2) / 3;
            const childHeight = (rect.height - gridSize * 2) / 3;

            children.forEach((child, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                const childRect = new DOMRect(
                    rect.x + col * (childWidth + gridSize),
                    rect.y + row * (childHeight + gridSize),
                    childWidth,
                    childHeight
                );
                processBlock(ctx, childRect, child, level + 1, gridSize);
            });
        }
    };

    // Main draw function
    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, rect: DOMRect) => {
            if (!renderable) return;

            const borderWidth = 2;
            const drawRect = new DOMRect(
                rect.x + borderWidth,
                rect.y + borderWidth,
                rect.width - borderWidth * 2,
                rect.height - borderWidth * 2
            );

            // Draw the outer border
            if (renderable) {
                processBlock(ctx, drawRect, renderable, 0, borderWidth);
            }
        },
        [renderable]
    );

    // Effect to handle drawing
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const drawRect = new DOMRect(
            0,
            0,
            rect.width,
            rect.height,
        );
        // Start drawing
        draw(ctx, drawRect);
    }, [renderable, draw]);

    // Function to handle touch/click events
    const handleClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const canvas = canvasRef.current;
        if (!canvas || !renderable) return;

        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // Function to detect which cell was clicked
        const detectClick = (renderable: IRenderable, rect: DOMRect, level: number): boolean => {
            if (!renderable) return false;

            // Check if this block contains the click
            if (clickX >= rect.x && clickX <= rect.x + rect.width && clickY >= rect.y && clickY <= rect.y + rect.height) {
                if (level === 2) { // Assuming level 2 is the target level
                    handleNavigate(renderable);
                    return true;
                }

                let children = renderable?.view?.withChildren()
                // If there are children, check them
                if (children && children.length === 9) {
                    const childWidth = (rect.width - 2) / 3;
                    const childHeight = (rect.height - 2) / 3;

                    for (let i = 0; i < 9; i++) {
                        const row = Math.floor(i / 3);
                        const col = i % 3;
                        const childRect = new DOMRect(
                            rect.x + col * (childWidth + 2),
                            rect.y + row * (childHeight + 2),
                            childWidth,
                            childHeight
                        );
                        if (detectClick(children[i], childRect, level + 1)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };

        detectClick(renderable, new DOMRect(0, 0, canvas.width, canvas.height), 0);
    };

    return (
        <canvas
            ref={canvasRef}
            width={300}
            height={300}
            style={{ border: '1px solid black', touchAction: 'none' }}
            onClick={handleClick}
        />
    );
};

export default SudokuView;