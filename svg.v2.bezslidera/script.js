var dane = "ARNDCQEGHILKMFPSTWYV"
document.getElementById("range").value = 0;
skrolowanie(document.getElementById("range").value)


function skrolowanie(range) {
    document.getElementById("svg").remove()                 //usuwanie starego svg



    let palet = document.createElementNS("http://www.w3.org/2000/svg", "svg")         //tworzenie nowego svg
    palet.setAttribute("id", "svg")
    palet.style.height = "500px;"
    palet.style.width = "1500px;"
    palet.classList.add("svg");
    document.body.appendChild(palet)

    const svgNS = svg.namespaceURI;

    var sizew = 1500;
    var sizeh = 500;
    var way = true;
    var oxygen = true;
    var nextamino = 0

    const ciag = dane.slice(Math.ceil(range / 30)*2 , Math.ceil(range / 30)*2 + 13)                             //docięcie aktualnie przedstawianego fragmentu białka
    console.log(range)
    console.log(ciag)
    console.log( parseInt(range) + 10)
    
    console.log("----------------------")
    var ciagamino = [];
    var ciagtab = [];

    for (let i = 0; i < ciag.length; i++) {                                             //przyporządkowanie białek do liter
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
    function makeline(x1, x2, y1, y2, width, type) {                                           //funkcja robi linie caly kod z niej korzysta
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
        //pozioma plinia w kształnie trójkata po lewej stronie czastki

        if (type == "triangle-right" || type == "triangle-left") {                                                      //pozioma plinia w kształnie trójkata po prawej lub lewej stronie czastki
            let triangle = document.createElementNS(svgNS, "polygon");
            triangle.setAttribute("points",
                x1 + "," + (y1 + 2) + " " +
                x1 + "," + y1 + " " +
                x2 + "," + (y2 - 4) + " " +
                x2 + "," + (y2 + 4))
            document.getElementById("svg").appendChild(triangle);
        }
    }
    function maketext(x, y, chars) {                                                            //funkcja robi tekst caly kod z niej korzysta\
        let numeric = 0;
        let uppercase = 0;
        let lowercase = 0;
        for (let t = 0; t < chars.length; t++) {
            if (chars.charAt(t) == chars.charAt(t).toUpperCase()) {
                uppercase++;
            }
            else {
                lowercase++;
            }

        }


        let rectbg = document.createElementNS(svgNS, "rect");                                             //generowanie tła
        rectbg.setAttribute("x", x - 4)
        rectbg.setAttribute("y", y - 18)
        rectbg.setAttribute("rx", 4)
        rectbg.setAttribute("ry", 4)
        rectbg.setAttribute("width", lowercase * 9 + uppercase * 15 + 10)
        rectbg.setAttribute("height", 22)
        document.getElementById("svg").appendChild(rectbg);



        let text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x)
        text.setAttribute("y", y)
        text.setAttribute("font-size", 1.4 + "em")
        text.innerHTML = chars
        document.getElementById("svg").appendChild(text);
    }
    function makecircle(x, y, r) {                                                              //funkcja robi kola caly kod z niej korzysta głównie na końcach lini zeby wyglad był mniej surowy
        let circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x)
        circle.setAttribute("cy", y)
        circle.setAttribute("r", r)
        document.getElementById("svg").appendChild(circle);

    }
    function makelinecurve(point) {                                                             //funkcja robi zakrzywione linie caly kod z niej kkorzysta
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
    function polygonf(type, point) {                                                            //funkcja robi wielokąty
        // console.log("wielokot", type)
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
            point.x = point.x + (point.side ? 35 : -35)

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
    for (let i = 0; i < Math.min(38, (ciag.length * 3 + 1)); i++) {                                              // templatka pasek , trzon bialka
        if (range == 0) {
            maketext(4, 255, "NH")
        }

        if (i % 2 == 0) {
            way = true
        }

        else {
            way = false
        }

        if (i % 3 == 0 && i != 0) {
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

        let points = [{}];
        let startpointx = i * 40
        let startpointy = sizeh / 2 + (way ? 5 : -5)
        let endpointx = i * 40 + 40
        let endpointy = sizeh / 2 - (way ? 5 : -5)

        if (ciag.length * 3 + 1<38) {
            if(i+1==Math.min(38, (ciag.length * 3 + 1))){
                    
                maketext(endpointx+5, endpointy+7, "O")
            }
        }







        makeline(startpointx, endpointx, startpointy, endpointy, 3, "normal")                                   //tworzenie poziomego zygzaka
        if (oxygen == true) {                                                                                   //dokladanie tlenu do trzonu
            makeline(startpointx - 2, startpointx - 2, startpointy, startpointy + (way ? 30 : -30), 2.5, "normal")
            makeline(startpointx + 2, startpointx + 2, startpointy, startpointy + (way ? 30 : -30), 2.5, "normal")
            maketext(startpointx - 8, startpointy + (way ? 50 : -33), "O")
        }




        if (aminokwas == true) {                                                                                 //dokladanie aminkwasów do trzonu
            let amin = ciagamino[nextamino]
            // console.log(amin)
            // console.log(amin.h)                                                                                  //wybór jaki aminkwas bedzie rysowany
            points[0].x = startpointx
            points[0].y = startpointy
            points[0].way = way;
            for (let o = 1; o <= amin.h - 2; o++) {                                                              //pionowy zygzak aminokwasu


                if (o % 2 == 0) {
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

            maketext(points[points.length - 1].x - amin.name.length * 5, (points[0].way ? 470 : 40), amin.name)                           //podpis aminokwasu
            for (let o = 2; o < amin.textspos.length; o++) {                                                        //czasteczki po bokach aminokwasów
                if (amin.textspos[o] == "DOWN") {
                    maketext(
                        points[points.length - 1].x - 10,
                        points[points.length - 1].y + (way ? 20 : -10),
                        amin.texts[o]
                    );
                }
                else {
                    maketext(
                        points[amin.textspos[o] - 3].x + (points[amin.textspos[o] - 3].side ? -45 : 30),
                        points[amin.textspos[o] - 3].y + 7,
                        amin.texts[o]
                    );
                }


            }

            switch (amin.name) {                                                                  // wedle wlsnosci kazdego bialka osobno
                case "arginine":
                    makelinecurve(points[6]);
                    maketext(points[4].x - 20, points[4].y + (points[4].way ? 10 : 5), "NH")
                    break;
                case "glutamic":
                    makelinecurve(points[4]);
                    break;
                case "methionine":
                    maketext(points[3].x - 5, points[3].y + (points[3].way ? 10 : 5), "S")
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
                        points[0].x + (points[0].side ? -5 : 5),
                        points[0].y,
                        points[0].y + (points[0].way ? 27 : -27),
                        2, "normal")
                    makeline(
                        points[0].x + (points[0].side ? -5 : 5),
                        points[0].x + (points[0].side ? 25 : -25),
                        points[0].y + (points[0].way ? 27 : -27),
                        points[0].y + (points[0].way ? 38 : -38),
                        2, "normal")
                    makeline(
                        points[0].x + (points[0].side ? 25 : -25),
                        points[0].x + (points[0].side ? 55 : -55),
                        points[0].y + (points[0].way ? 38 : -38),
                        points[0].y + (points[0].way ? 27 : -27),
                        2, "normal")
                    makeline(
                        points[0].x + (points[0].side ? 55 : -55),
                        points[0].x + (points[0].side ? 45 : -45),
                        points[0].y + (points[0].way ? 27 : -27),
                        points[0].y + (points[0].way ? 0 : -0),
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
                        points[2].x - 14,
                        points[2].x + 9,
                        points[2].y + (way ? 48 : -48),
                        points[2].y + (way ? 68 : -68),
                        2, "normal")

                    maketext(points[2].x + 10, points[2].y + (way ? 85 : -70), "OH")


                    break;
                case "tryptophan":                  //do poprawki

                    polygonf("5", points[2])
                    let helper = {};
                    helper.x = points[2].x + (points[2].side ? -42 : -17)
                    helper.y = points[2].y + (points[2].way ? 77 : -30)
                    polygonf("6", helper)

                    maketext(points[2].x + (points[2].side ? 25 : -25), points[2].y + (points[2].way ? 35 : -22), "NH")


                    break;
                default:
                    break;
            }

            nextamino++
        }
    }
}