import { ReactNode,  useState } from "react";
import { UiElement } from "./DockBar";


interface DraggableContainerProps {
  children: ReactNode;
  title: string;
  sharedState: UiElement[];
  setSharedState: React.Dispatch<React.SetStateAction<UiElement[]>>;
  id: number;
}

export default function DraggableContainer({ children, title, sharedState, setSharedState,id }: DraggableContainerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState('50vw');
  const [height, setHeight] = useState('50vh');

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      setPosition({ x: e.clientX - initialPosition.x, y: e.clientY - initialPosition.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="draggable-container  absolute  cursor-move"
      style={{ width,  height ,left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className=" header px-2 py-2 bg-gray-300 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={isDragging ? handleMouseMove : () => { }}
        onMouseUp={isDragging ? handleMouseUp : () => { }}
      >
        <div className="flex justify-between">
          <div>{title}</div>
          <div className="flex justify-center items-center">
            <div onClick={()=> {
              setWidth("85vw");
              setHeight("80vh")
            }} className="px-2 minimize">🗖</div>
            <div onClick={
              ()=> {
                var newState = sharedState.filter(i => {
                  return i.element.key != id.toString();
                });
                setSharedState([...newState]);
              }
            } className="px-2 cross">❎</div>
          </div>
        </div>

      </div>
      <div className="content h-full bg-gray-200  border-gray-300">
        {children}
      </div>
    </div>
  );
};
