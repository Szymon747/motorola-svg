var dane="ARNDCQEGHILKMFPSTWYVARNDCQEGHILKMFPSTWYVARNDCQEGHILKMFPSTWYV"




function skrolowanie(range) {
    console.log(range)
    document.getElementById("svg").remove()



    let palet=document.createElementNS("http://www.w3.org/2000/svg", "svg")
    palet.setAttribute("id", "svg")
    palet.style.height="500px;"
    palet.style.width="1500px;"
    palet.classList.add("svg");
    document.body.appendChild(palet)


    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svgNS = svg.namespaceURI;

    var sizew = 1500;
    var sizeh = 500;
    var way = true;
    var oxygen = true;
    var nextamino = 0


    const ciag = dane.slice(Math.ceil(range/30)*2,range+10)
    // const ciag = "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
    var ciagamino = []

    var ciagtab = [];
    for (let i = 0; i < ciag.length; i++) {
        ciagtab[i] = ciag.charAt(i);
        switch (ciag.charAt(i)) {
            case "A":
                ciagamino[i] = alanine
                break;
            case "R":
                ciagamino[i] = arginine
                break;
            case "N":
                ciagamino[i] = asparagine
                break;
            case "D":
                ciagamino[i] = aspartic
                break;
            case "C":
                ciagamino[i] = cysteine
                break;





            case "Q":
                ciagamino[i] = glutamine
                break;
            case "E":
                ciagamino[i] = glutamic
                break;
            case "G":
                ciagamino[i] = glycine
                break;
            case "H":
                ciagamino[i] = histidine
                break;
            case "I":
                ciagamino[i] = isoleucine
                break;





            case "L":
                ciagamino[i] = leucine
                break;
            case "K":
                ciagamino[i] = lysine
                break;
            case "M":
                ciagamino[i] = methionine
                break;
            case "F":
                ciagamino[i] = phenylanine
                break;
            case "P":
                ciagamino[i] = proline
                break;





            case "S":
                ciagamino[i] = serine
                break;
            case "T":
                ciagamino[i] = threonine
                break;
            case "W":
                ciagamino[i] = tryptophan
                break;
            case "Y":
                ciagamino[i] = tyrosine
                break;
            case "V":
                ciagamino[i] = valine
                break;

            default:
                console.log("błąd");
        }
    }


    function makeline(x1, x2, y1, y2, width, type) {                                           //funkcja robi linie caly kod z niej kkorzysta
        if (type == "normal") {
            let line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", x1)
            line.setAttribute("x2", x2)
            line.setAttribute("y1", y1)
            line.setAttribute("y2", y2)
            line.setAttribute("stroke-width", width)
            document.getElementById("svg").appendChild(line);
            makecircle(x1, y1, 1)
            makecircle(x2, y2, 1)
        }
        if (type == "double") {
            makeline(x1, x2, y1 - 2.5, y2 - 2.5, width - 0.5, "normal")
            makeline(x1, x2, y1 + 2.5, y2 + 2.5, width - 0.5, "normal")
        }
        // else if (linetype == "triangle-left") {                                                      //pozioma plinia w kształnie trójkata po lewej stronie czastki
        //     const triangle = document.createElementNS(svgNS, "polygon");
        //     triangle.setAttribute("points",
        //         parseFloat((x + 200) * scale) + "," + parseFloat((y + 10) * scale) + " " +
        //         parseFloat((x + 200) * scale) + "," + parseFloat((y) * scale) + " " +
        //         parseFloat((x) * scale) + "," + parseFloat((y - 25) * scale) + " " +
        //         parseFloat((x) * scale) + "," + parseFloat((y + 25) * scale)

        //     )
        //     document.getElementById("svg").appendChild(triangle);
        // }
        if (type == "triangle-right") {                                                      //pozioma plinia w kształnie trójkata po prawej stronie czastki
            let triangle = document.createElementNS(svgNS, "polygon");
            triangle.setAttribute("points",
                x1 + "," + (y1 + 2) + " " +
                x1 + "," + y1 + " " +
                x2 + "," + (y2 - 4) + " " +
                x2 + "," + (y2 + 4))


            document.getElementById("svg").appendChild(triangle);
        }
    }
    function maketext(x, y, chars) {
        let text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x)
        text.setAttribute("y", y)
        text.setAttribute("font-size", 1.4 + "em")
        text.innerHTML = chars
        document.getElementById("svg").appendChild(text);
    }
    function makecircle(x, y, r) {
        let circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x)
        circle.setAttribute("cy", y)
        circle.setAttribute("r", r)
        document.getElementById("svg").appendChild(circle);

    }
    function makelinecurve(point) {
        let linecurve = document.createElementNS(svgNS, "path");                                             //path krzywa 
        linecurve.setAttribute("d", "M " +
            parseFloat((point.x + (point.side ? 30 : -30))) + " " +
            parseFloat((point.y + (point.way ? -20 : 20))) + " " + "Q" +
            parseFloat((point.x + (point.side ? 8 : -8))) + " " +
            parseFloat((point.y + (point.way ? -20 : 20))) + " " +
            parseFloat((point.x + (point.side ? 6 : -6))) + " " +
            parseFloat((point.y)))
        linecurve.setAttribute("fill", "transparent")
        linecurve.setAttribute("stroke-width", 2)
        document.getElementById("svg").appendChild(linecurve);
    }
    function polygonf(type, point) {
        console.log("wielokot", type)
        point.x = point.x + (point.side ? 7 : -7)
        polygon = document.createElementNS(svgNS, "polygon")
        if (type == "5") {
            let scale = 1.4;
            polygon.setAttribute("points",

                parseFloat((point.side ? -30 : 30) * scale + point.x) + "," +
                parseFloat((point.way ? 20 : -20) * scale + point.y) + " " +

                parseFloat((point.side ? -15 : 15) * scale + point.x) + "," +
                parseFloat((point.way ? 30 : -30) * scale + point.y) + " " +

                parseFloat(point.x) + "," +
                parseFloat((point.way ? 20 : -20) * scale + point.y) + " " +

                parseFloat((point.side ? -5 : 5) * scale + point.x) + "," +   //lewy gorny rog
                parseFloat(point.y) + " " +

                parseFloat((point.side ? -25 : 25) * scale + point.x) + "," +
                parseFloat(point.y))
        }
        if (type == "6") {
            let scale = 1.4;
            point.x = point.x + (point.side ? 7 : -21)

            polygon.setAttribute("points",

                parseFloat((point.x)) + "," +            //lewy skrajny
                parseFloat(((point.way ? 17.3 : -17.3) * scale + point.y)) + " " +

                parseFloat(((point.side ? -10 : 10) * scale + point.x)) + "," +
                parseFloat((point.y)) + " " +

                parseFloat(((point.side ? -30 : 30) * scale + point.x)) + "," +
                parseFloat((point.y)) + " " +

                parseFloat(((point.side ? -40 : 40) * scale + point.x)) + "," +
                parseFloat(((point.way ? 17.3 : -17.3) * scale + point.y)) + " " +

                parseFloat(((point.side ? -30 : 30) * scale + point.x)) + "," +
                parseFloat(((point.way ? 17.3 : -17.3) * 2 * scale + point.y)) + " " +

                parseFloat(((point.side ? -10 : 10) * scale + point.x)) + "," +
                parseFloat(((point.way ? 17.3 : -17.3) * 2 * scale + point.y)) + " " +

                parseFloat((point.x)) + "," +
                parseFloat(((point.way ? 17.3 : -17.3) * scale + point.y)))
        }


        polygon.setAttribute("stroke-width", 2.5)
        polygon.setAttribute("stroke", "black")
        polygon.setAttribute("fill", "lightgray")
        document.getElementById("svg").appendChild(polygon);
    }
    for (let i = 1; i < Math.max(36, ciag.length); i++) {                                              // templatka pasek , trzon bialka

        let points = [{}];
        if (i % 2 == 0) {
            way = true
        }
        else {
            way = false
        }

        if (i % 3 == 0) {
            oxygen = true;
        }
        else {
            oxygen = false;
        }
        if (i % 3 == 2) {
            aminokwas = true;
        }
        else {
            aminokwas = false;
        }


        let startpointx = i * 40
        let startpointy = sizeh / 2 + (way ? 5 : -5)
        let endpointx = i * 40 + 40
        let endpointy = sizeh / 2 - (way ? 5 : -5)

        makeline(startpointx, endpointx, startpointy, endpointy, 3, "normal")
        if (oxygen == true) {                                                                                   //dokladanie tlenu do trzonu
            makeline(startpointx - 2, startpointx - 2, startpointy, startpointy + (way ? 30 : -30), 2.5, "normal")
            makeline(startpointx + 2, startpointx + 2, startpointy, startpointy + (way ? 30 : -30), 2.5, "normal")
            maketext(startpointx - 8, startpointy + (way ? 50 : -33), "O")
        }




        if (aminokwas == true) {                                                                                  //dokladanie aminkwasów do trzonu
            let amin = ciagamino[nextamino]
            console.log(amin)
            console.log(amin.h)                                                                                  //wybór jaki aminkwas bedzie rysowany
            points[0].x = startpointx
            points[0].y = startpointy
            points[0].way = way;
            for (let o = 1; o <= amin.h - 2; o++) {                                                                         //pionowy zygzak


                if (o % 2 == 1) {
                    side = true
                }
                else {
                    side = false
                }

                let helper = {}
                helper.x = points[o - 1].x - (side ? 5 : -5);
                helper.y = points[o - 1].y + (way ? 27 : -27);
                helper.side = side;
                helper.way = way;
                points.push(helper);


                makeline(points[o - 1].x, points[o].x, points[o - 1].y, points[o].y, 3, "normal")

            }
            for (let o = 2; o < amin.horizontalline.length; o++) {                                               //poziome linie aminokwasów                                                                      
                if (amin.horizontalline[o] == "DOWN") {

                }
                else {
                    makeline(
                        points[amin.horizontalline[o] - 3].x,
                        points[amin.horizontalline[o] - 3].x + (points[amin.horizontalline[o] - 3].side ? -25 : 25),
                        points[amin.horizontalline[o] - 3].y,
                        points[amin.horizontalline[o] - 3].y, 3, amin.linetype[o]
                    )
                }
            }

            maketext(points[points.length - 1].x, points[points.length - 1].y, amin.name)                           //podpis aminokwasu
            for (let o = 2; o < amin.textspos.length; o++) {                                                        //czasteczki po kokach aminokwasów
                if (amin.textspos[o] == "DOWN") {

                    maketext(
                        points[points.length - 1].x - 10,
                        points[points.length - 1].y + (way ? 20 : -10),
                        amin.texts[o]
                    );
                }
                else {

                    //teksty(litery)
                    maketext(
                        points[amin.textspos[o] - 3].x + (points[amin.textspos[o] - 3].side ? -45 : 30),
                        points[amin.textspos[o] - 3].y + 7,
                        amin.texts[o]
                    );
                }


            }

            switch (amin.name) {                                                                  // wedle wlsnosci kazdego bialka opsobno
                case "arginine":
                    makelinecurve(points[6]);
                    maketext(points[4].x - 20, points[4].y + (points[4].way ? 10 : 5), "NH")
                    break;
                case "glutamic":
                    makelinecurve(points[4]);
                    break;
                case "methionine":
                    maketext(points[2].x - 5, points[2].y + (points[2].way ? 10 : 5), "S")
                    break;
                case "aspartic":
                    makelinecurve(points[3]);

                    break;
                case "histidine":
                    polygonf("5", points[2])

                    makeline(
                        points[2].x + (side ? -10 : 10),
                        points[2].x + (side ? -5 : 5),
                        points[2].y + (way ? 5 : -5),
                        points[2].y + (way ? 25 : -25),
                        2, "normal")

                    makeline(
                        points[2].x + (side ? -32 : 32),
                        points[2].x + (side ? -37 : 37),
                        points[2].y + (way ? 5 : -5),
                        points[2].y + (way ? 25 : -25),
                        2, "normal")

                    maketext(points[2].x + (side ? 20 : -20), points[2].y + (points[2].way ? 35 : -20), "N")
                    maketext(points[2].x + (side ? -55 : 45), points[2].y + (points[2].way ? 35 : -20), "NH")
                    break;

                case "proline":                                                 //do dokonczenia
                    makeline(
                        points[0].x,
                        points[0].x + (points[0].side ? 5 : -5),
                        points[0].y,
                        points[0].y + (points[0].way ? 27 : -27),
                        2, "normal")
                    makeline(
                        points[0].x + (points[0].side ? 5 : -5),
                        points[0].x + (points[0].side ? 35 : -35),
                        points[0].y + (points[0].way ? 27 : -27),
                        points[0].y + (points[0].way ? 35 : -35),
                        2, "normal")

                    break;
                case "phenylanine":                                         //do dokonczenia
                    polygonf("6", points[2])

                    // linedraw(x,y,120,30,280,30);
                    // linedraw(x,y,120,320,30,173);
                    // linedraw(x,y,284,320,370,173);

                    break;
                case "tyrosine":

                    polygonf("6", points[2])
                    makeline(
                        points[2].x + 43,
                        points[2].x + 58,
                        points[2].y + (way ? 48 : -48),
                        points[2].y + (way ? 68 : -68),
                        2, "normal")

                    maketext(points[2].x + 55, points[2].y + (way ? 85 : -70), "OH")


                    break;
                case "tryptophan":                  //do poprawki

                    polygonf("5", points[2])
                    let helper = {};
                    helper.x = points[2].x + (side ? -20 : -17)
                    helper.y = points[2].y + (way ? 80 : -30)
                    polygonf("6", helper)

                    maketext(points[2].x + (side ? 35 : 35), points[2].y + (way ? 35 : -22), "NH")


                    break;
                default:
                    break;
            }

            nextamino++
        }



    }
}