var listProg=[
    // NAME                     YEAR        SCREENSHOT                          DESCRIPTION                                                 LANGUAGE            TOOL
    ["Hello World",             "2018",     "img/Hello World(batch).png",       "My first program",                                         "img/BAT.png",      "img/notepad.png"],
    ["Password",                "2018",     "img/Password.png",                 "Checking the correctness of the input",                    "img/BAT.png",      "img/notepad.png"],
    ["Rock Papper Scissors",    "2018",     "img/Rock Papper Scissors.png",     "A game against the computer with a random choice",         "img/BAT.png",      "img/notepad.png"],
    ["Calculator",              "2018",     "img/Calculator.png",               "Simple calculator for Bat",                                "img/BAT.png",      "img/notepad.png"],
    ["Deducer",                 "2018",     "img/Deducer.png",                  "The simplest program repeating after you",                 "img/BAT.png",      "img/notepad.png"],
    ["Parser",                  "2018",     "img/Parser.png",                   "A program that breaks words into parts",                   "img/BAT.png",      "img/notepad.png"],
    ["Square",                  "2018",     "img/Square.png",                   "The program that draws a square",                          "img/BAT.png",      "img/notepad.png"],
    ["Triangle",                "2018",     "img/Triangle.png",                 "The program that draws a triangle",                        "img/BAT.png",      "img/notepad.png"],
    ["Sprite",                  "2018",     "img/Sprite.png",                   "A simple sprite on a batch",                               "img/BAT.png",      "img/notepad.png"],
    ["More less",               "2018",     "img/More less.png",                "The game is more less on a batch",                         "img/BAT.png",      "img/notepad.png"],
    ["Space Zombies",           "2019",     "img/Space Zombies.png",            "My first android game",                                    "img/java.png",     "img/AS.png"],
    ["Multiplication table",    "2018",     "img/Multiplication table.png",     "Multiplication table in C ++",                             "img/C++.png",       "img/VS.png"],
    ["More less(C++)",          "2018",     "img/More less(C++).png",           "The game is more less on a C++",                           "img/C++.png",       "img/VS.png"],
    ["Snake",                   "2019",     "img/Snake.png",                    "A simple snake",                                           "img/JS.png",       "img/notepad.png"],
    ["Bubble Sort",             "2019",     "img/Bubble Sort.png",              "Bubble sort on pascal",                                    "img/PASCAL.png",  "img/ABC.png"],
    ["AuxProg",                 "2021",     "img/AuxProg.png",                  "Simple autoclicker",                                       "img/JS.png",  "img/QT.png"],
    ["WebInfo",                 "2021",     "img/WebInfo.png",                  "Python program with web interface",                        "img/python.png",  "img/PC.png"],
    ["Tetris",                  "2019",     "img/Tetris.png",                   "Java tetris",                                              "img/java.png",  "img/notepad.png"],
    ["Aquarium",                "2020",     "img/Aquarium.png",                 "Aquarium with fish",                                       "img/CS.png",  "img/VS.png"],
    ["Fractal",                 "2019",     "img/Fractal.png",                  "Sierpinski triangle",                                      "img/CS.png",  "img/VS.png"],
    ["Library",                 "2020",     "img/Library.png",                  "Mini library for 2D games",                                "img/CS.png",  "img/VS.png"],
    ["Osu",                     "2020",     "img/osu!.png",                     "My osu parody",                                            "img/CS.png",  "img/VS.png"],
    ["Tanks",                   "2020",     "img/Tanks.png",                    "Tank game",                                                "img/CS.png",  "img/VS.png"],
    ["Rock Papper Scissors",    "2020",     "img/rock scissors paper2.png",     "A game against the computer with a random choice",         "img/CS.png",  "img/VS.png"]
];

var section=document.getElementById("programs");

for (let i of listProg) {
    let block=document.createElement("article");
    block.className="program";
    section.appendChild(block);

    let bg_img=document.createElement("img");
    bg_img.className="pr-bg_img";
    bg_img.src=i[2];
    block.appendChild(bg_img);

    let image=document.createElement("img");
    image.className="pr-image";
    image.src=i[2];
    block.appendChild(image);

    let lang=document.createElement("img");
    lang.className="pr-lang logo";
    lang.src=i[4];
    block.appendChild(lang);

    let tool=document.createElement("img");
    tool.className="pr-tool logo";
    tool.src=i[5];
    block.appendChild(tool);

    let text=document.createElement("div");
    text.className="pr-text";
    text.textContent=i[3];
    block.appendChild(text);

    let name=document.createElement("div");
    name.className="pr-name";
    name.textContent=i[0];
    block.appendChild(name);

    let year=document.createElement("div");
    year.className="pr-year";
    year.textContent=i[1];
    block.appendChild(year);
};

var up=document.getElementById("up");
up.onclick=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

window.onscroll=()=>{
    if(document.body.scrollTop>512 || document.documentElement.scrollTop>512)
        up.style.display="block";
    else
        up.style.display="none";
}