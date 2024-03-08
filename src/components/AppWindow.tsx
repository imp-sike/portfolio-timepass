import { useState } from "react";

export default function DraggableContainer() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: any) => {
    console.log("Here")
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      const newX = e.clientX - initialPosition.x;
      const newY = e.clientY - initialPosition.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="draggable-container absolute bg-gray-200 border border-gray-300 cursor-move"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="header py-2 bg-gray-300 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={isDragging ? handleMouseMove : () => { }}
        onMouseUp={isDragging ? handleMouseUp : () => { }}
      >
        Drag me!
      </div>
      <div className="content p-4">
        {/* Your content goes here */}
        <p>This is a draggable container in React with Tailwind CSS.</p>
      </div>
    </div>
  );
};
