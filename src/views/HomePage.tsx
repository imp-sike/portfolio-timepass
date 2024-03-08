import DockBar from "../components/DockBar";
import HeaderBar from "../components/HeaderBar";

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