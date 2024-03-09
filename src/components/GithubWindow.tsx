import { UiElement } from "./DockBar";
import DraggableContainer from "./DraggableContainer";

interface GithubWindowProps {
    sharedState: UiElement[];
    setSharedState: React.Dispatch<React.SetStateAction<UiElement[]>>;
    id: number;
}

export default function GithubWindow(props: GithubWindowProps) {
    return (
        <div className="">
            <DraggableContainer sharedState={props.sharedState} setSharedState={props.setSharedState} id={props.id} title="Github Profile - Sulav Parajuli">
                <img className="" src="https://cdn.jsdelivr.net/gh/imp-sike/imp-sike@main/2.png" />
            </DraggableContainer>
        </div>
    );
}