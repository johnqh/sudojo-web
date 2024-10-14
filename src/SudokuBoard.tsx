// src/SudokuBoard.tsx

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
    // Initialize the remaining rows similarly...
    // For brevity, only the first three rows are shown here
  ];

  const [puzzle, setPuzzle] = useState<Cell[][]>(initialPuzzle);

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

        if (cell.value !== 0) {
          // Draw the main number
          ctx.font = '20px Arial';
          ctx.fillStyle = '#000';
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
      });
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawBoard(ctx, puzzle);
      }
    }
  }, [puzzle]); // Redraw whenever puzzle changes

  return (
    <canvas
      ref={canvasRef}
      width={450}
      height={450}
      style={{ border: '1px solid black', maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default SudokuBoard;