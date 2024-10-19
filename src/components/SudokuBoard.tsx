// src/components/SudokuBoard.tsx

import React, { useEffect, useRef, useState } from 'react';

interface Cell {
    value: number; // 0 represents an empty cell
    pencilmarks: number[]; // Possible numbers (1-9) as pencilmarks
}

const SudokuBoard: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Initialize the puzzle with pencilmarks
    const initialPuzzle: Cell[][] = [
        [
            { value: 5, pencilmarks: [] },
            { value: 3, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 2, 4] },
            { value: 0, pencilmarks: [2, 6] },
            { value: 7, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 3, 4] },
            { value: 0, pencilmarks: [1, 2] },
            { value: 0, pencilmarks: [1, 2, 4] },
            { value: 0, pencilmarks: [2, 3, 4] },
        ],
        [
            { value: 6, pencilmarks: [] },
            { value: 0, pencilmarks: [2, 7] },
            { value: 0, pencilmarks: [2, 3, 4] },
            { value: 1, pencilmarks: [] },
            { value: 9, pencilmarks: [] },
            { value: 5, pencilmarks: [] },
            { value: 0, pencilmarks: [3, 4] },
            { value: 0, pencilmarks: [2, 3, 6] },
            { value: 0, pencilmarks: [1, 2, 4] },
        ],
        [
            { value: 0, pencilmarks: [1, 2, 3] },
            { value: 9, pencilmarks: [] },
            { value: 8, pencilmarks: [] },
            { value: 0, pencilmarks: [3, 4] },
            { value: 0, pencilmarks: [3, 4] },
            { value: 0, pencilmarks: [1, 4] },
            { value: 0, pencilmarks: [1, 4, 5] },
            { value: 6, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 2, 4, 7] },
        ],
        [
            { value: 8, pencilmarks: [] },
            { value: 0, pencilmarks: [5] },
            { value: 0, pencilmarks: [1, 2] },
            { value: 0, pencilmarks: [7, 9] },
            { value: 6, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 4] },
            { value: 0, pencilmarks: [3, 4, 5] },
            { value: 0, pencilmarks: [2, 5] },
            { value: 3, pencilmarks: [] },
        ],
        [
            { value: 4, pencilmarks: [] },
            { value: 0, pencilmarks: [2, 5] },
            { value: 0, pencilmarks: [3, 5] },
            { value: 8, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 5] },
            { value: 3, pencilmarks: [] },
            { value: 0, pencilmarks: [2, 5] },
            { value: 0, pencilmarks: [4, 5] },
            { value: 1, pencilmarks: [] },
        ],
        [
            { value: 7, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 3, 4, 9] },
            { value: 0, pencilmarks: [1, 3, 4] },
            { value: 0, pencilmarks: [8] },
            { value: 2, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 4] },
            { value: 0, pencilmarks: [1, 3, 4, 9] },
            { value: 0, pencilmarks: [3, 4, 5] },
            { value: 6, pencilmarks: [] },
        ],
        [
            { value: 0, pencilmarks: [1, 3, 5] },
            { value: 6, pencilmarks: [] },
            { value: 0, pencilmarks: [4, 5] },
            { value: 0, pencilmarks: [1, 5] },
            { value: 0, pencilmarks: [3, 4] },
            { value: 0, pencilmarks: [1, 4, 5] },
            { value: 2, pencilmarks: [] },
            { value: 8, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 3, 4] },
        ],
        [
            { value: 0, pencilmarks: [1, 2, 3] },
            { value: 0, pencilmarks: [3, 4, 5] },
            { value: 0, pencilmarks: [4, 5] },
            { value: 0, pencilmarks: [1, 2] },
            { value: 8, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 2] },
            { value: 0, pencilmarks: [1, 2, 3, 5] },
            { value: 7, pencilmarks: [] },
            { value: 9, pencilmarks: [] },
        ],
        [
            { value: 0, pencilmarks: [1, 2, 3] },
            { value: 0, pencilmarks: [2, 4, 5] },
            { value: 0, pencilmarks: [1, 3, 4] },
            { value: 0, pencilmarks: [1, 2, 5] },
            { value: 8, pencilmarks: [] },
            { value: 0, pencilmarks: [1, 3, 4] },
            { value: 0, pencilmarks: [1, 2, 4] },
            { value: 7, pencilmarks: [] },
            { value: 9, pencilmarks: [] },
        ],
    ];

    const [puzzle, setPuzzle] = useState<Cell[][]>(initialPuzzle);
    const [selectedCell, setSelectedCell] = useState<{
        row: number;
        col: number;
    } | null>(null); // Track the selected cell

    const cellSize = 450 / 9; // Each cell is 50x50

    const drawBoard = (ctx: CanvasRenderingContext2D, puzzle: Cell[][]) => {
        const size = 450; // Canvas size: 450x450
        const cellSize = size / 9; // Each cell: 50x50
        ctx.clearRect(0, 0, size, size); // Clear the canvas

        // Draw grid lines
        ctx.strokeStyle = '#000';
        for (let i = 0; i <= 9; i++) {
            ctx.lineWidth = i % 3 === 0 ? 2 : 1; // Thicker lines for 3x3 subgrids
            ctx.beginPath();
            ctx.moveTo(i * cellSize, 0);
            ctx.lineTo(i * cellSize, size);
            ctx.moveTo(0, i * cellSize);
            ctx.lineTo(size, i * cellSize);
            ctx.stroke();
        }

        // Draw numbers and pencilmarks
        puzzle.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const x = colIndex * cellSize;
                const y = rowIndex * cellSize;

                // Check if the current cell is selected
                const isSelected =
                    selectedCell &&
                    selectedCell.row === rowIndex &&
                    selectedCell.col === colIndex;

                // Highlight the selected cell
                if (isSelected) {
                    ctx.fillStyle = 'black'; // Black background for selected cell
                    ctx.fillRect(x, y, cellSize, cellSize);
                }
                // Ensure the text color is reset for each cell
                ctx.fillStyle = isSelected ? 'black' : 'white'; // White text if selected, black otherwise

                if (cell.value !== 0) {
                    // Draw the main number
                    ctx.font = '20px Arial';
                    ctx.fillStyle = isSelected ? 'white' : 'black';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(
                        `${cell.value}`,
                        x + cellSize / 2,
                        y + cellSize / 2
                    );
                } else if (cell.pencilmarks.length > 0) {
                    // Draw pencilmarks
                    ctx.font = '10px Arial';
                    ctx.fillStyle = '#555';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    // Arrange pencilmarks in a 3x3 grid within the cell
                    const markSize = cellSize / 3;
                    cell.pencilmarks.forEach((mark) => {
                        const markIndex = mark - 1; // Marks are 1-9
                        const markRow = Math.floor(markIndex / 3);
                        const markCol = markIndex % 3;
                        const markX = x + (markCol + 0.5) * markSize;
                        const markY = y + (markRow + 0.5) * markSize;
                        ctx.fillText(`${mark}`, markX, markY);
                    });
                }
                // Draw pink border for the selected cell
                if (isSelected) {
                    ctx.strokeStyle = 'pink';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, cellSize, cellSize);
                }
            });
        });
    };

    // Handle clicks on the canvas
    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left; // Get X coordinate within the canvas
        const y = event.clientY - rect.top; // Get Y coordinate within the canvas

        // Calculate the clicked row and column
        const col = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);

        // Update the selected cell
        setSelectedCell({ row, col });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                drawBoard(ctx, puzzle); // Redraw the board when the puzzle or selected cell changes
            }
        }
    }, [puzzle, selectedCell]); // Redraw whenever puzzle or selectedCell changes

    return (
        <canvas
            ref={canvasRef}
            width={450}
            height={450}
            style={{
                border: '1px solid black',
                maxWidth: '100%',
                height: 'auto',
            }}
            onClick={handleClick} // Add click handler
        />
    );
};

export default SudokuBoard;
