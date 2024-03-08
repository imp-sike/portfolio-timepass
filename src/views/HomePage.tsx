import DockBar from "../components/DockBar";
import HeaderBar from "../components/HeaderBar";
import DraggableContainer from "../components/DraggableContainer"

export default function HomePage() {
    return (
        <div>
            <div className="home-bg h-[100vh]">
                <HeaderBar />
            </div>
            <DockBar/>
        </div>
    );
}