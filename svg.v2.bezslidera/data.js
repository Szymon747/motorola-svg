

const core = {                                                                      //główny rdzen powtarzalny dla wszytski aminokwasów
    name: "core",
    h: 4,
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
    texts: ["O", "NH3",],
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
    texts: ["O", "NH3", "OH"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const seleconysteine = {
    name: "seleconysteine",
    h: 4,
    texts: ["O", "NH3", "SE"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const cysteine = {
    name: "cysteine",
    h: 4,
    texts: ["O", "NH3", "SH"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const glycine = {
    name: "glycine",
    h: 2,
    texts: ["O", "NH3"],
    textspos: [2, 3],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const alanine = {
    name: "alanine",
    h: 3,
    texts: ["O", "NH3",],
    textspos: [2, 3,],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const lysine = {
    name: "lysine",
    h: 7,
    texts: ["O", "NH3", "H3N"],
    textspos: [2, 3, "DOWN"],
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
}
const valine = {
    name: "valine",
    h: 4,
    texts: ["O", "NH3",],
    textspos: [2, 3],
    horizontalline: [2, 3,4],
    linetype: ["normal", "triangle-right","normal"],
}
const glutamine = {
    name: "glutamine",
    h: 6,
    texts: ["O", "NH3", "NH2", "O"],
    textspos: [2, 3, "DOWN", 6],
    horizontalline: [2, 3, 6],
    linetype: ["normal", "triangle-right", "double"],
}
const leucine = {
    name: "leucine",
    h: 5,
    texts: ["O", "NH3",],
    textspos: [2, 3,],
    horizontalline: [2, 3, 5],
    linetype: ["normal", "triangle-right", "triangle-right"],
}
const asparagine = {
    name: "asparagine",
    h: 5,
    texts: ["O", "NH3", "H2N", "O"],
    textspos: [2, 3, "DOWN", 5],
    horizontalline: [2, 3, 5],
    linetype: ["normal", "triangle-right", "double"],
}
const threonine = {
    name: "threonine",
    h: 4,
    texts: ["O", "NH3", "OH"],
    textspos: [2, 3, 4],
    horizontalline: [2, 3, 4],
    linetype: ["normal", "triangle-right", "normal"],
}
const arginine = {
    name: "arginine",
    h: 8,
    texts: ["O", "NH3", "NH2", "H2N"],
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
const methionine = {
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
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right",],
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
const tryptophan = {
    name: "tryptophan",
    h: 4,
    horizontalline: [2, 3],
    linetype: ["normal", "triangle-right"],
    texts: ["O", "NH3"],
    textspos: [2, 3],
}