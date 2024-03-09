import React, { useState, useRef } from 'react';


export default function Terminal() {

    const appender = `<span class='text-red-500'>(base)</span> <span class='text-green-500'>imp-sike@portfolio:~$</span>`;
    const projects = `<span class='text-white'>
    <span class='font-bold text-xl underline'>My Projects</span><br>
    <span  class="text-red-500 font-bold">1. Crisps</span> (A News Application built with flutter.)<br>
    <span  class="text-red-500 font-bold">2. Homeplex API Server</span> (An api server written in Go for a home rental service.)<br>
    <span  class="text-red-500 font-bold">3. Meth</span> (A basic CRUD creator based on JSON representating database schema.)<br>
    <span  class="text-red-500 font-bold">4. Minutes</span> (A fullstack Short News distribution system made with Flutter, React and Express.js.)<br>
    <span  class="text-red-500 font-bold">5. HURF Nepal</span> (Flutter based mobile app for Human Resource,Nepal.)<br>
    <span  class="text-red-500 font-bold">6. Prastuti TV</span> (Flluter app for video content distribution for childrens.)<br>
    <span  class="text-red-500 font-bold">7. aimsbrt.edu.np</span> (A website created for Web Development Competition held in AIMS College, Biratnagar (won the competition).)<br>
    <span  class="text-red-500 font-bold">8. Milkman App</span> (Offline Mobile App for Milkman daily records and analytics.)<br>
    <span  class="text-red-500 font-bold">9. Graphics.js</span> (A hobby project that wraps around canvas api in JS to make it similar to graphics.h header.)<br><br>
    These are just my projects that I think will be benificial to show how much I am intrested in doing projects. To see list of hobby projects that I think will be better for you to explore can be seen using the command 'more'. <br><br>Syntax: <span class='text-red-500 font-bold'>more</span>
    </span><br><br>`;

    const aboutMe = `
    <span class='text-white flex justify-between'>
    <div>
    <h1 class='font-bold text-2xl'>I am Sulav Parajuli...</h1>
    <h1 class='font-bold text-xl'>A Software Developer who loves his job.</h1>
    <br>
    <h1 class='text-green-500 font-bold'>Frameworks and Languages I love to work on:</h1>
    <span>
    1. Flutter<br>
    2. React.js<br>
    3. Android(Java/Kotlin)<br>
    4. Godot(GDScript/C#)<br>
    <br><hr><br>
    1. Java<br>
    2. C++/C/nasm<br>
    3. Dart<br>
    4. Python/PHP(a great fan)<br>
    5. And anything that has a documentation that I can refer to.<br><br>
    I am a fan of imperative programming when it comes to logic stuffs but when It's UI;<br> I favour Declarative Programming!
    </span>
    </div>
    <div>
    <img src="https://cdn.jsdelivr.net/gh/imp-sike/imp-sike@main/image.png" />
    </div>
    </span>
    `;

    const moreProjects = `<span class='text-white'>
    <span class='font-bold text-xl underline'>My Projects (Secrets)</span><br>
    <span  class="text-red-500 font-bold">1. AWC</span> (I know its a dumb project but I learned how low level stuffs works in Android.)<br>
    <span  class="text-red-500 font-bold">2. Zinnie</span> (I created a VS code extension that would see the model file written in GO lang and create RESTful API based on it. Also has a Firebase Authentication layer on it.)<br>
    <span  class="text-red-500 font-bold">3. F.U.S.E</span> (Have not completed this.This project is/will be an API based assistant to enhance shopping experience of facebook users via the Facebook ecommerce page.)<br>
    <span  class="text-red-500 font-bold">4. Quiz App</span> (Client told me to build a simple quiz app using Firebase.He did not pay me. So its  still in my garage haha.)<br>
    <span  class="text-red-500 font-bold">5. My Fiction Audio Book</span> (Still an unpaid work. Have made a Flutter app and admin panel and api using php.)<br>
    </span><br><br>`;

    const help = `<span class='text-white'><pre>
    ███                                                ███  █████              
    ░░░                                                ░░░  ░░███               
    ████  █████████████   ████████              █████  ████  ░███ █████  ██████ 
   ░░███ ░░███░░███░░███ ░░███░░███ ██████████ ███░░  ░░███  ░███░░███  ███░░███
    ░███  ░███ ░███ ░███  ░███ ░███░░░░░░░░░░ ░░█████  ░███  ░██████░  ░███████ 
    ░███  ░███ ░███ ░███  ░███ ░███            ░░░░███ ░███  ░███░░███ ░███░░░  
    █████ █████░███ █████ ░███████             ██████  █████ ████ █████░░██████ 
   ░░░░░ ░░░░░ ░░░ ░░░░░  ░███░░░             ░░░░░░  ░░░░░ ░░░░ ░░░░░  ░░░░░░  
                          ░███                                                  
                          █████                                                 
                         ░░░░░                                                  
    </pre><br>
    Welcome to CLI Interface to know more about me.<br>
    The following are all the available commands that you can use:<br><br>
    <span  class="text-red-500 font-bold">Singular Commands</span><br>
    ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lists all of my Projects. <br>
    clear &nbsp;&nbsp;&nbsp; Clears the screen.<br>
    about &nbsp;&nbsp;&nbsp;&nbsp; Obviously About Me.<br>
    <br>
    <span  class="text-red-500 font-bold">Plural Commands</span><br>
    detail {projectId} &nbsp;&nbsp;&nbsp;&nbsp; Shows the details of the specific project. <br>
    </span>`;
    const scr = `<script>var contentElement = document.getElementById('content');
    if(contentElement) {
        contentElement.scrollTop = contentElement?.scrollHeight;
        console.log("Vayo")
    }</script>`;
    const [outputLines, setOutputLines] = useState<string[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (userInput.toLowerCase() === "clear") {
            setOutputLines([]);
        } else if (userInput.toLowerCase() === "help") {
            setOutputLines([...outputLines, appender + `&nbsp;<span class='text-white'>${userInput}</span>`, help, scr]);
        } else if (userInput.toLowerCase() === "ls") {
            setOutputLines([...outputLines, appender + `&nbsp;<span class='text-white'>${userInput}</span>`, projects, scr]);
        } else if (userInput.toLowerCase() === "ls --friend") {
            setOutputLines([...outputLines, appender + `&nbsp;<span class='text-white'>${userInput}</span>`, moreProjects, scr]);
        } else if (userInput.toLowerCase() === "about") {
            setOutputLines([...outputLines, appender + `&nbsp;<span class='text-white'>${userInput}</span>`, aboutMe, scr]);
        }
        else {
            setOutputLines([...outputLines, appender + `&nbsp;<span class='text-white'>${userInput}</span>`, `<span class='text-white'>
            The command ${userInput} is not found in the memory of this terminal.
            </span>`, scr]);
        }

        setUserInput('');

        // Focus on the input for the next interaction
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div id="content" className="bg-black flex flex-col h-full p-2 overflow-scroll">
            <div>
                {outputLines.map((line, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
            </div>
            <form className='flex' onSubmit={handleInputSubmit}>
                <div dangerouslySetInnerHTML={{ __html: appender }}></div>&nbsp;
                <input
                    ref={inputRef}
                    type="text"
                    className="text-white bg-transparent border-none outline-none"
                    value={userInput}
                    autoFocus={true}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}
