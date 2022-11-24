
function generate(bialko, x, y, scale) {     //rysuje jedno aminokwas
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    //core
    for (let i = 1; i <= bialko.h; i++) {
        const line = document.createElementNS(svgNS, "line");    //generowanie pionowych lini w zetke
        if (i % 2 == 0) {
            line.setAttribute("x1", (x + 450) * scale)
            line.setAttribute("x2", (x + 550) * scale)
        } else {
            line.setAttribute("x1", (x + 550) * scale)
            line.setAttribute("x2", (x + 450) * scale)
        }
        line.setAttribute("y1", (200 * i + y) * scale)
        line.setAttribute("y2", (200 * i + 200 + y) * scale)
        line.setAttribute("stroke-width", 10 * scale)
        document.getElementById("svg").appendChild(line);
    }

    molecule("O", 150 + x, 455 + y, scale)
    molecule("O", 510 + x, 170 + y, scale)
    molecule("NH3", 700 + x, 650 + y, scale)

    const linehorizontal = document.createElementNS(svgNS, "line");     //horizonral line to O
    linehorizontal.setAttribute("x1", (x + 450) * scale)
    linehorizontal.setAttribute("y1", (y + 400) * scale)
    linehorizontal.setAttribute("x2", (x + 300) * scale)
    linehorizontal.setAttribute("y2", (y + 400) * scale)
    linehorizontal.setAttribute("stroke-width", 10 * scale)
    document.getElementById("svg").appendChild(linehorizontal);


    const linecurve = document.createElementNS(svgNS, "path");     //curve line to O
    linecurve.setAttribute("d", "M " + parseFloat((520 + x) * scale) + " " + parseFloat((200 + y) * scale) + " " + "Q" + parseFloat((430 + x) * scale) + " " + parseFloat((370 + y) * scale) + " " + parseFloat((300 + x) * scale) + " " + parseFloat((370 + y)) * scale)
    linecurve.setAttribute("fill", "transparent")
    linecurve.setAttribute("stroke-width", 10 * scale)
    document.getElementById("svg").appendChild(linecurve);


    const triangle = document.createElementNS(svgNS, "polygon");
    triangle.setAttribute("points", parseFloat((x + 550) * scale) + "," + parseFloat((y + 605) * scale) + " " + parseFloat((x + 550) * scale) + "," + parseFloat((y + 595) * scale) + " " + parseFloat((x + 700) * scale) + "," + parseFloat((y + 585) * scale) + " " + parseFloat((x + 700) * scale) + "," + parseFloat((y + 615) * scale))
    document.getElementById("svg").appendChild(triangle);


                                                                    //---------more than core-------------//


    if (bialko.hasOwnProperty("texts")) {                                                   //czasteczka na dole lancucha
        for (let i = 0; i < bialko.texts.length; i++) {
            if (bialko.textspos[i] == "DOWN") {
                if (bialko.h % 2 == 0) {
                    molecule(bialko.texts[i], (450 + x), (bialko.h * 200 + 340 + y), scale)
                } else {
                    molecule(bialko.texts[i], (350 + x), (bialko.h * 200 + 340 + y), scale)
                }
            }
        }
    }
    switch (bialko.name) {                                                                  //P wedle wlsnosci kazdego bialka opsobno
        case "arginine":
            break;

        default:
    }
}
function molecule(molecule, x, y, scale) {          //nazwa molekuły,kordynaty,skala   np   ("G", 100, 700, 1)              rysuje czasteczki   
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    var valuespace = 0;
    for (let i = 0; i < molecule.length; i++) {
        if (molecule.charAt(i) >= 0) {
            var numbervalue = molecule.charAt(i);
            valuespace = i;
            molecule = molecule.replace(numbervalue, " ")
        }
    }
    console.log(numbervalue)
    console.log(molecule)

    const rectbg = document.createElementNS(svgNS, "rect");
    rectbg.setAttribute("x", (x-20) * scale)
    rectbg.setAttribute("y", (y-120) * scale)
    rectbg.setAttribute("rx", 20 * scale)
    rectbg.setAttribute("ry", 20 * scale)
    rectbg.setAttribute("width", (80+molecule.length*70) * scale)
    rectbg.setAttribute("height", (150) * scale)
    document.getElementById("svg").appendChild(rectbg);


    const moleculetext = document.createElementNS(svgNS, "text");
    moleculetext.setAttribute("x", x * scale)
    moleculetext.setAttribute("y", y * scale)
    moleculetext.setAttribute("font-size", scale * 10 + "em")
    moleculetext.innerHTML = molecule
    document.getElementById("svg").appendChild(moleculetext);
    if (valuespace) {
        const moleculenumber = document.createElementNS(svgNS, "text");
        moleculenumber.setAttribute("x", (x + 120 + (valuespace - 1) * 100) * scale)
        moleculenumber.setAttribute("y", (y + 30) * scale)
        moleculenumber.setAttribute("font-size", scale * 5 + "em")
        moleculenumber.innerHTML = numbervalue
        document.getElementById("svg").appendChild(moleculenumber);
    }

}


var core = {
    name: "core",
    h: 4,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
}
var serine = {
    name: "serine",
    h: 4,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
    texts: ["OH"],               //texts list
    textspos: ["DOWN"],          //texts position=
}
var seleconysteine = {
    name: "seleconysteine",
    h: 4,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
    texts: ["SE"],               //texts list
    textspos: ["DOWN"],          //texts position=
}
var cysteine = {
    name: "cysteine",
    h: 4,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
    texts: ["SH"],               //texts list
    textspos: ["DOWN"],          //texts position=
}
var glycine = {
    name: glycine,
    h: 2,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
}
var alanine = {
    name: "alanine",
    h: 3,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
}
var lysine = {
    name: "lysine",
    h: 7,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
    texts: ["H3N"],              //texts list
    textspos: ["DOWN"],          //texts position
    texthelper: ["3"],          //texts position
}
var valine = {
    name: "valine",
    h: 4,                        //height-ilosc iponowych kresek
    NH: "3",                     //NH value 2 or 3 
    texthelper: ["3"],          //texts position
}
var glutamine = {
    name: "glutamine",
    h: 8,
    NH: "3",                 //NH value 2 or 3 
    texts: ["NH"],              //texts list
    textspos: ["DOWN"],          //texts position
    texthelper: ["2"],          //texts position
}
generate(core, 0, 0, 0.45)        // nazwa bialka,x,y,skala
generate(serine, 1000, 0, 1)        // nazwa bialka,x,y,skala
generate(seleconysteine, 2000, 0, 1)        // nazwa bialka,x,y,skala
generate(cysteine, 3000, 0, 1)        // nazwa bialka,x,y,skala
generate(glycine, 4000, 0, 1)        // nazwa bialka,x,y,skala
generate(alanine, 5000, 0, 1)        // nazwa bialka,x,y,skala
generate(lysine, 6000, 0, 1)        // nazwa bialka,x,y,skala
generate(glutamine, 0, 1500, 1)        // nazwa bialka,x,y,skala
//molecule("G", 100, 700, 1)