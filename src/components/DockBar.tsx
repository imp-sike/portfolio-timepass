import { SetStateAction, useEffect, useState } from "react";
import DraggableContainer from "./DraggableContainer";
import GithubWindow from "./GithubWindow";

interface DockItem {
    id: number;
    title: string;
    icon: string;
}

export interface UiElement {
    element: JSX.Element;
    id: number;
}

export default function DockBar() {
    const [listOfDockItems, setListOfDockItems] = useState<DockItem[]>([]);
    const [listOfOpenWindows, setListOfOpenWindows] = useState<UiElement[]>([
    ]);

    useEffect(() => {
        setListOfDockItems(
            [
                {
                    id: 1,
                    title: "Launcher",
                    icon: "https://cdn2.iconfinder.com/data/icons/minimalism/512/Launcher.png",

                },
                {
                    id: 2,
                    title: "Projects",
                    icon: "https://icon-library.com/images/file-browser-icon/file-browser-icon-4.jpg",


                },
                {
                    id: 3,
                    title: "Terminal",
                    icon: "https://simplecodetips.com/wp-content/uploads/2017/01/Linux-Terminal-icon.png",

                },
                {
                    id: 4,
                    title: "Resume",
                    icon: "https://icon-library.com/images/resume-icon/resume-icon-16.jpg",

                },
                {
                    id: 5,
                    title: "Github",
                    icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271892/github-icon-md.png",
                },
            ]
        );
    }, []);

    return (
        <>
            <div className="absolute bottom-0 m-4  left-0 right-0 mx-auto">
                <div className="flex justify-center">

                    {
                        listOfDockItems.map((item) => {
                            return (
                                <button onClick={() => {
                                    var r = Math.random();
                                    if(item.title === "Github" ){
                                        console.log(r);
                                        setListOfOpenWindows([...listOfOpenWindows, {
                                            id: r,
                                            element: <GithubWindow key={r} sharedState={listOfOpenWindows} setSharedState={setListOfOpenWindows} id={r}/>
                                        }]);
                                    } else if(item.title === "Resume" ){
                                        setListOfOpenWindows([...listOfOpenWindows, {
                                            id: r,
                                            element: <DraggableContainer title={"Sulav Parajuli Resume"} sharedState={listOfOpenWindows} setSharedState={setListOfOpenWindows} id={r}>
                                                <iframe className="h-full w-full" src="https://dagrs.berkeley.edu/sites/default/files/2020-01/sample.pdf"></iframe>
                                            </DraggableContainer> 
                                        }]);
                                    }
                                }}>
                                    <div className="single-entry px-2 cursor-pointer">
                                        <div className="group inline-block relative ">
                                            <img className="w-14 h-14 p-1 bg-white hover:p-0 hover:bg-transparent rounded-xl" src={item.icon} alt={item.title} />
                                            <div className="hidden text-center group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-[#00000055] text-white rounded">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })
                    }


                </div>
            </div>
            {
                listOfOpenWindows.map((item) => {
                    return item.element;
                })
            }
        </>
    );
}