import { useEffect, useState } from "react";

interface DockItem {
    id: number;
    title: string;
    icon: string;
    // opens: string; // opens what??
}

export default function DockBar() {
    const [listOfDockItems, setListOfDockItems] = useState<DockItem[]>([]);

    useEffect(() => {
        setListOfDockItems(
            [
                {
                    id: 1,
                    title: "Launcher",
                    icon: "https://cdn2.iconfinder.com/data/icons/minimalism/512/Launcher.png"
                },
                {
                    id: 1,
                    title: "Explorer",
                    icon: "https://icon-library.com/images/file-browser-icon/file-browser-icon-4.jpg"
                },
                {
                    id: 2,
                    title: "Terminal",
                    icon: "https://simplecodetips.com/wp-content/uploads/2017/01/Linux-Terminal-icon.png"
                },
                {
                    id: 1,
                    title: "Editor",
                    icon: "https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png"
                },
             


            ]
        );
    }, []);

    return (
        <div className="absolute bottom-0 m-4  left-0 right-0 mx-auto">
            <div className="flex justify-center">

                {
                    listOfDockItems.map((item) => {
                        return (
                            <div className="single-entry px-2 cursor-pointer">
                                <div className="group inline-block relative ">
                                    <img className="w-14 h-14 p-1 bg-white hover:p-0 hover:bg-transparent rounded-xl" src={item.icon} alt={item.title} />
                                    <div className="hidden text-center group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-[#00000055] text-white rounded">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        </div>
    );
}