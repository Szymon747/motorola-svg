
function generate(bialko, x, y, scale) {     //rysuje jedno aminokwas
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    //core
    for (let i = 1; i <= bialko.h; i++) {                                                               //generowanie pionowych lini w zetke
        const line = document.createElementNS(svgNS, "line");
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


    var linecurve = document.createElementNS(svgNS, "path");                                             //path krzywa 
    linecurve.setAttribute("d", "M " +
        parseFloat((520 + x) * scale) + " " +
        parseFloat((200 + y) * scale) + " " + "Q" +
        parseFloat((430 + x) * scale) + " " +
        parseFloat((370 + y) * scale) + " " +
        parseFloat((250 + x) * scale) + " " +
        parseFloat((370 + y)) * scale)
    linecurve.setAttribute("fill", "transparent")
    linecurve.setAttribute("stroke-width", 10 * scale)
    document.getElementById("svg").appendChild(linecurve);



    //---------more than core-------------//

    if (bialko.hasOwnProperty("horizontalline")) {                                              //poziome linie
        for (let i = 0; i < bialko.horizontalline.length; i++) {
            if (bialko.horizontalline[i] % 2 == 0) {
                horizontalline(bialko.linetype[i], 250 + x, bialko.horizontalline[i] * 200 + y, scale)
            }
            else {
                horizontalline(bialko.linetype[i], 550 + x, bialko.horizontalline[i] * 200 + y, scale)
            }
        }
    }


    if (bialko.hasOwnProperty("texts")) {                                                       //czasteczka na dole lancucha

        // texts: ["H2N","O"],              //texts list
        // textspos: ["DOWN",5]           //texts position
        for (let i = 0; i < bialko.texts.length; i++) {
            let adder = false;
            if (bialko.texts[i].length == 1) {
                adder = true;
            }
            if (bialko.textspos[i] == "DOWN") {
                if (bialko.h % 2 == 0) {
                    molecule(bialko.texts[i], (600 + x - adder * 80), (bialko.h * 200 + 340 + y), scale)
                } else {
                    molecule(bialko.texts[i], (500 + x - adder * 80), (bialko.h * 200 + 340 + y), scale)
                }
            }
            else {
                if (bialko.textspos[i] % 2 == 0) {
                    molecule(bialko.texts[i], (150 + x), (bialko.textspos[i] * 200 + 50 + y), scale)
                } else {
                    molecule(bialko.texts[i], (950 + x - adder * 140), (bialko.textspos[i] * 200 + 50 + y), scale)
                }
            }
        }
    }
    molecule("O", 510 + x, 170 + y, scale)
    //molecule(bialko.name, x + 400, y + 600 + bialko.h * 200, scale)


    personalized(bialko, x, y, scale);
}
function personalized(bialko, x, y, scale) {

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;

    var polygon = document.createElementNS(svgNS, "polygon")
    var line = document.createElementNS(svgNS, "line");
    var xslide = 0;
    var yslide = 0;
    switch (bialko.name) {                                                                  // wedle wlsnosci kazdego bialka opsobno
        case "arginine":
            linecurve = document.createElementNS(svgNS, "path");                                             //path krzywa 
            linecurve.setAttribute("d", "M " +
                parseFloat((520 + x) * scale) + " " +
                parseFloat((1800 + y) * scale) + " " + "Q" +
                parseFloat((430 + x) * scale) + " " +
                parseFloat((1630 + y) * scale) + " " +
                parseFloat((250 + x) * scale) + " " +
                parseFloat((1630 + y)) * scale)
            linecurve.setAttribute("fill", "transparent")
            linecurve.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(linecurve);
            molecule("NH", x + 600, y + 1450, scale)
            break;
        case "glutamic":
            linecurve = document.createElementNS(svgNS, "path");                                             //path krzywa 
            linecurve.setAttribute("d", "M " +
                parseFloat((520 + x) * scale) + " " +
                parseFloat((1400 + y) * scale) + " " + "Q" +
                parseFloat((430 + x) * scale) + " " +
                parseFloat((1230 + y) * scale) + " " +
                parseFloat((250 + x) * scale) + " " +
                parseFloat((1230 + y)) * scale)
            linecurve.setAttribute("fill", "transparent")
            linecurve.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(linecurve);
            break;
        case "methionine":
            molecule("S", x + 450, y + 1250, scale)
            break;
        case "aspartic":
            linecurve = document.createElementNS(svgNS, "path");                                             //path krzywa 
            linecurve.setAttribute("d", "M " +
                parseFloat((750 + x) * scale) + " " +
                parseFloat((1040 + y) * scale) + " " + "Q" +
                parseFloat((550 + x) * scale) + " " +
                parseFloat((1040 + y) * scale) + " " +
                parseFloat((480 + x) * scale) + " " +
                parseFloat((1200 + y)) * scale)
            linecurve.setAttribute("fill", "transparent")
            linecurve.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(linecurve);
            break;
        case "histidine":
            polygon = document.createElementNS(svgNS, "polygon")
            xslide = 500;
            yslide = 1000;
            polygon.setAttribute("points",

                parseFloat((300 + x + xslide) * scale) + "," +
                parseFloat((200 + y + yslide) * scale) + " " +

                parseFloat((150 + x + xslide) * scale) + "," +
                parseFloat((314 + y + yslide) * scale) + " " +

                parseFloat((x + xslide) * scale) + "," +
                parseFloat((200 + y + yslide) * scale) + " " +

                parseFloat((50 + x + xslide) * scale) + "," +   //lewy gorny rog
                parseFloat((y) * scale + yslide) + " " +

                parseFloat((250 + x + xslide) * scale) + "," +
                parseFloat((y) * scale + yslide))


            polygon.setAttribute("stroke-width", 10 * scale)
            polygon.setAttribute("stroke", "black")
            polygon.setAttribute("fill", "white")
            document.getElementById("svg").appendChild(polygon);



            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 70 + xslide) * scale)
            line.setAttribute("y1", (y + 25 + yslide) * scale)
            line.setAttribute("x2", (x + 230 + xslide) * scale)
            line.setAttribute("y2", (y + 25 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 150 + xslide) * scale)
            line.setAttribute("y1", (y + 284 + yslide) * scale)
            line.setAttribute("x2", (x + 25 + xslide) * scale)
            line.setAttribute("y2", (y + 190 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            molecule("N", (500 + x), (1250 + y), scale)
            molecule("NH", (900 + x), (1250 + y), scale)

            break;

        case "proline":
            polygon = document.createElementNS(svgNS, "polygon")
            xslide = 500;
            yslide = 600;
            polygon.setAttribute("points",

                parseFloat((300 + x + xslide) * scale) + "," +
                parseFloat((200 + y + yslide) * scale) + " " +

                parseFloat((150 + x + xslide) * scale) + "," +
                parseFloat((314 + y + yslide) * scale) + " " +

                parseFloat((x + xslide) * scale) + "," +
                parseFloat((200 + y + yslide) * scale) + " " +

                parseFloat((50 + x + xslide) * scale) + "," +   //lewy gorny rog
                parseFloat((y) * scale + yslide) + " " +

                parseFloat((250 + x + xslide) * scale) + "," +
                parseFloat((y) * scale + yslide))


            polygon.setAttribute("stroke-width", 10 * scale)
            polygon.setAttribute("stroke", "black")
            polygon.setAttribute("fill", "white")
            document.getElementById("svg").appendChild(polygon);

            horizontalline("triangle-right", 550 + x, 600 + y, scale)

            break;
        case "phenylanine":
            polygon = document.createElementNS(svgNS, "polygon")
            xslide = 450;
            yslide = 1000;
            polygon.setAttribute("points",

                parseFloat((x + xslide) * scale) + "," +            //lewy skrajny
                parseFloat((173 + y + yslide) * scale) + " " +

                parseFloat((100 + x + xslide) * scale) + "," +
                parseFloat((y + yslide) * scale) + " " +

                parseFloat((300 + x + xslide) * scale) + "," +
                parseFloat((y + yslide) * scale) + " " +

                parseFloat((400 + x + xslide) * scale) + "," +
                parseFloat((173 + y + yslide) * scale) + " " +

                parseFloat((300 + x + xslide) * scale) + "," +
                parseFloat((173 * 2 + y + yslide) * scale) + " " +

                parseFloat((100 + x + xslide) * scale) + "," +
                parseFloat((173 * 2 + y + yslide) * scale) + " " +

                parseFloat((x + xslide) * scale) + "," +
                parseFloat((173 + y + yslide) * scale))


            polygon.setAttribute("stroke-width", 10 * scale)
            polygon.setAttribute("stroke", "black")
            polygon.setAttribute("fill", "white")
            document.getElementById("svg").appendChild(polygon);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 120 + xslide) * scale)
            line.setAttribute("y1", (y + 30 + yslide) * scale)
            line.setAttribute("x2", (x + 280 + xslide) * scale)
            line.setAttribute("y2", (y + 30 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 120 + xslide) * scale)
            line.setAttribute("y1", (y + 320 + yslide) * scale)
            line.setAttribute("x2", (x + 30 + xslide) * scale)
            line.setAttribute("y2", (y + 173 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 284 + xslide) * scale)
            line.setAttribute("y1", (y + 158 * 2 + yslide) * scale)
            line.setAttribute("x2", (x + 370 + xslide) * scale)
            line.setAttribute("y2", (y + 173 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            break;
        case "tyrosine":
            polygon = document.createElementNS(svgNS, "polygon")
            xslide = 450;
            yslide = 1000;
            polygon.setAttribute("points",

                parseFloat((x + xslide) * scale) + "," +            //lewy skrajny
                parseFloat((173 + y + yslide) * scale) + " " +

                parseFloat((100 + x + xslide) * scale) + "," +
                parseFloat((y + yslide) * scale) + " " +

                parseFloat((300 + x + xslide) * scale) + "," +
                parseFloat((y + yslide) * scale) + " " +

                parseFloat((400 + x + xslide) * scale) + "," +
                parseFloat((173 + y + yslide) * scale) + " " +

                parseFloat((300 + x + xslide) * scale) + "," +
                parseFloat((173 * 2 + y + yslide) * scale) + " " +

                parseFloat((100 + x + xslide) * scale) + "," +
                parseFloat((173 * 2 + y + yslide) * scale) + " " +

                parseFloat((x + xslide) * scale) + "," +
                parseFloat((173 + y + yslide) * scale))


            polygon.setAttribute("stroke-width", 10 * scale)
            polygon.setAttribute("stroke", "black")
            polygon.setAttribute("fill", "white")
            document.getElementById("svg").appendChild(polygon);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 120 + xslide) * scale)
            line.setAttribute("y1", (y + 30 + yslide) * scale)
            line.setAttribute("x2", (x + 280 + xslide) * scale)
            line.setAttribute("y2", (y + 30 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 120 + xslide) * scale)
            line.setAttribute("y1", (y + 320 + yslide) * scale)
            line.setAttribute("x2", (x + 30 + xslide) * scale)
            line.setAttribute("y2", (y + 173 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);

            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 284 + xslide) * scale)
            line.setAttribute("y1", (y + 158 * 2 + yslide) * scale)
            line.setAttribute("x2", (x + 370 + xslide) * scale)
            line.setAttribute("y2", (y + 173 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);


            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", (x + 300 + xslide) * scale)
            line.setAttribute("y1", (y + 350 + yslide) * scale)
            line.setAttribute("x2", (x + 400 + xslide) * scale)
            line.setAttribute("y2", (y + 550 + yslide) * scale)
            line.setAttribute("stroke-width", 10 * scale)
            document.getElementById("svg").appendChild(line);
            break;
        default:
    }
}
function horizontalline(linetype, x, y, scale) {               //typ lini,x1,x2,
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    if (linetype == "normal") {                                                      //pozioma pojedyncza linia

        const linehorizontal = document.createElementNS(svgNS, "line");
        linehorizontal.setAttribute("x1", (x) * scale)
        linehorizontal.setAttribute("y1", (y) * scale)
        linehorizontal.setAttribute("x2", (x + 200) * scale)
        linehorizontal.setAttribute("y2", (y) * scale)
        linehorizontal.setAttribute("stroke-width", 10 * scale)
        document.getElementById("svg").appendChild(linehorizontal);
    }
    else if (linetype == "double") {                                                      //pozioma podwójna linia
        horizontalline("normal", x, y + 10, scale)
        horizontalline("normal", x, y - 10, scale)

    }
    else if (linetype == "triangle-left") {                                                      //pozioma plinia w kształnie trójkata po lewej stronie czastki
        const triangle = document.createElementNS(svgNS, "polygon");
        triangle.setAttribute("points",
            parseFloat((x + 200) * scale) + "," + parseFloat((y + 10) * scale) + " " +
            parseFloat((x + 200) * scale) + "," + parseFloat((y) * scale) + " " +
            parseFloat((x) * scale) + "," + parseFloat((y - 25) * scale) + " " +
            parseFloat((x) * scale) + "," + parseFloat((y + 25) * scale)

        )
        document.getElementById("svg").appendChild(triangle);
    }
    else if (linetype == "triangle-right") {                                                      //pozioma plinia w kształnie trójkata po prawej stronie czastki
        const triangle = document.createElementNS(svgNS, "polygon");
        triangle.setAttribute("points",
            parseFloat((x) * scale) + "," + parseFloat((y + 10) * scale) + " " +
            parseFloat((x) * scale) + "," + parseFloat((y) * scale) + " " +
            parseFloat((x + 200) * scale) + "," + parseFloat((y - 25) * scale) + " " +
            parseFloat((x + 200) * scale) + "," + parseFloat((y + 25) * scale)

        )
        document.getElementById("svg").appendChild(triangle);
    }
}
function molecule(molecule, x, y, scale) {                                                           //nazwa molekuły,kordynaty,skala   np   ("G", 100, 700, 1)              rysuje czasteczki   
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    var valuespace = 0;
    var bigchar = 0;
    var smallchar = 0;
    for (let i = 0; i < molecule.length; i++) {                                             //zliczanie duzych i małych znaków
        if (molecule.charAt(i) >= 0) {
            var numbervalue = molecule.charAt(i);
            valuespace = i;
            smallchar++;
            molecule = molecule.replace(numbervalue, " ")
        }
        else {
            bigchar++;
        }
    }

    const rectbg = document.createElementNS(svgNS, "rect");                                             //generowanie tła
    rectbg.setAttribute("x", (x - (bigchar * 120 + smallchar * 20 - 60)) * scale)
    rectbg.setAttribute("y", (y - 140) * scale)
    rectbg.setAttribute("rx", 20 * scale)
    rectbg.setAttribute("ry", 20 * scale)
    rectbg.setAttribute("width", (40 + bigchar * 120 + smallchar * 20) * scale)
    rectbg.setAttribute("height", (180) * scale)
    document.getElementById("svg").appendChild(rectbg);


    const moleculetext = document.createElementNS(svgNS, "text");                                             //wypisanie tekstu duzych liter
    moleculetext.setAttribute("x", (x - (bigchar * 120 + smallchar * 20 - 80)) * scale)
    moleculetext.setAttribute("y", y * scale)
    moleculetext.setAttribute("font-size", scale * 10 + "em")
    moleculetext.innerHTML = molecule
    document.getElementById("svg").appendChild(moleculetext);
    if (valuespace) {
        const moleculenumber = document.createElementNS(svgNS, "text");                                             //wypisanie tektstu male znaki na miejsce spacji
        moleculenumber.setAttribute("x", (x - 60 + (valuespace - 1) * 100) * scale)
        moleculenumber.setAttribute("y", (y + 30) * scale)
        moleculenumber.setAttribute("font-size", scale * 5 + "em")
        moleculenumber.innerHTML = numbervalue
        document.getElementById("svg").appendChild(moleculenumber);
    }

}

//----dane aminokwasów---



const core = {                                                                      //główny rdzen powtarzalny dla wszytski aminokwasów
    name: "core",
    h: 4,
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
    texts: ["O", "NO3",],
    textspos: [2, 3,]
}
const core2 = {                                                                     //do testów
    name: "core2",
    h: 4,
    horizontalline: [1, 2],
    linetype: ["normal", "triangle-left"],
    texts: ["A", "B", "C", "D", "E", "F"],
    textspos: [1, 2, 3, 4, 5, 6]
}
const serine = {
    name: "serine",
    h: 4,
    texts: ["O", "NO3", "OH"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const seleconysteine = {
    name: "seleconysteine",
    h: 4,
    texts: ["O", "NO3", "SE"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const cysteine = {
    name: "cysteine",
    h: 4,
    texts: ["O", "NO3", "SH"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const glycine = {
    name: "glycine",
    h: 2,
    texts: ["O", "NO3"],
    textspos: [2, 3],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const alanine = {
    name: "alanine",
    h: 3,
    texts: ["O", "NO3",],
    textspos: [2, 3,],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const lysine = {
    name: "lysine",
    h: 7,
    texts: ["O", "NO3", "H3N"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const valine = {
    name: "valine",
    h: 4,
    texts: ["O", "NO3",],
    textspos: [2, 3],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const glutamine = {
    name: "glutamine",
    h: 6,
    texts: ["O", "NO3", "NH2", "O"],
    textspos: [2, 3, "DOWN", 6],
    horizontalline: [2, 3, 6],
    linetype: ["normal", "triangle-right", "normal"],
}
const leucine = {
    name: "leucine",
    h: 5,
    texts: ["O", "NO3",],
    textspos: [2, 3,],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const asparagine = {
    name: "asparagine",
    h: 5,
    texts: ["O", "NO3", "H2N", "O"],
    textspos: [2, 3, "DOWN", 5],
    horizontalline: [2, 3, 5],
    linetype: ["normal", "triangle-right", "normal"],
}
const threonine = {
    name: "threonine",
    h: 4,
    texts: ["O", "NO3", "OH"],
    textspos: [2, 3, 4],
    horizontalline: [2, 3, 4],
    linetype: ["normal", "triangle-right", "normal"],
}
const arginine = {
    name: "arginine",
    h: 8,
    texts: ["O", "NH3", "NH2", "NH2"],
    textspos: [2, 3, 8, "DOWN"],
    horizontalline: [2, 3, 8],
    linetype: ["normal", "triangle-right", "normal", "normal"],
}
const glutamic = {
    name: "glutamic",
    h: 6,
    horizontalline: [2, 3, 6],
    linetype: ["normal", "triangle-right", "normal", "normal"],
    texts: ["O", "NH3", "O", "O"],
    textspos: [2, 3, 6, "DOWN"],
}
const isoleucine = {
    name: "isoleucine",
    h: 5,
    horizontalline: [2, 3, 4],
    linetype: ["normal", "triangle-right", "triangle-left"],
    texts: ["O", "NH3"],
    textspos: [2, 3],
}
const nethionine = {
    name: "methionine",
    h: 6,
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
    texts: ["O", "NH3"],
    textspos: [2, 3],
}
const aspartic = {
    name: "aspartic",
    h: 5,
    horizontalline: [2, 3, 5],
    linetype: ["normal", "triangle-right", "normal"],
    texts: ["O", "NH3", "O", "O"],
    textspos: [2, 3, 5, "DOWN"],
}
const histidine = {
    name: "histidine",
    h: 4,
    horizontalline: [2, 3, 5],
    linetype: ["normal", "triangle-right", "normal"],
    texts: ["O", "NH3"],
    textspos: [2, 3],
}
const proline = {
    name: "proline",
    h: 2,
    horizontalline: [2],
    linetype: ["normal"],
    texts: ["O", "NH2"],
    textspos: [2, 3],
}
const phenylanine = {
    name: "phenylanine",
    h: 4,
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
    texts: ["O", "NH3"],
    textspos: [2, 3],
}
const tyrosine = {
    name: "tyrosine",
    h: 4,
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
    texts: ["O", "NH3"],
    textspos: [2, 3],
}

// generate(core, 500, 0, 1)        // nazwa bialka,x,y,skala
// generate(serine, 1500, 0, 1)        // nazwa bialka,x,y,skala
// generate(seleconysteine, 2500, 0, 1)        // nazwa bialka,x,y,skala
// generate(cysteine, 3500, 0, 1)        // nazwa bialka,x,y,skala
// generate(glycine, 4500, 0, 1)        // nazwa bialka,x,y,skala
// generate(alanine, 5500, 0, 1)        // nazwa bialka,x,y,skala
// generate(lysine, 6500, 0, 1)        // nazwa bialka,x,y,skala
// generate(valine, 500, 2000, 1)        // nazwa bialka,x,y,skala
// generate(glutamine, 1500, 2000, 1)        // nazwa bialka,x,y,skala
// generate(leucine, 2500, 2000, 1)        // nazwa bialka,x,y,skala
// generate(asparagine, 3500, 2000, 1)        // nazwa bialka,x,y,skala
// generate(threonine, 4500, 2000, 1)        // nazwa bialka,x,y,skala
// generate(arginine, 5500, 2000, 1)
// generate(glutamic, 6500, 2000, 1)
// generate(isoleucine, 500, 4000, 1)
// generate(nethionine, 1500, 4000, 1)
// generate(aspartic, 2500, 4000, 1)
// generate(histidine, 3500, 4000, 1)
// generate(proline, 4500, 4000, 1)
// generate(phenylanine, 5500, 4000, 1)
generate(tyrosine, 00, 000, 1)