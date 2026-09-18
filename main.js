const prompt = require("prompt-sync")();

//all terminal

//chess table
let table = [{"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0},
             {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0}];

function showTable() {
    console.clear()
    console.log("\tA B C D E F G H");
    let chosse = true
    for (let i = 0; i < table.length; i++) {
        let row = table[i];
        let rowString = (i + 1) + "\t";
        chosse = !chosse
        let backcolor = {true:"\x1b[40m", false: "\x1b[47m"};
        let color = {true: "\x1b[37m", false: "\x1b[30m"};
        for (let key in row) {
            if(row[key] == 0){
                rowString += color[chosse] + backcolor[chosse] + row[key] + "\x1b[0m ";
            }else if(row[key]  < 0){
                rowString += "\x1b[31m" + backcolor[chosse] + (row[key] * -1) + "\x1b[0m ";
            }else{
                rowString += "\x1b[34m" + backcolor[chosse] + (row[key]) + "\x1b[0m ";
            }
            chosse = !chosse
        }
        console.log(rowString);
    }
    console.log("\n 1 - piao, 2 - cavalo, 3 - bispo, 4 - torre, 5 - rainha, 6 - rei\n");
}

function initializeTable() {
    //piao
    for (let key in table[1]) {
        table[1][key] = 1;
    }
    for (let key in table[6]) {
        table[6][key] = -1;
    }

    //cavalo
    table[0]["B"] = 2;
    table[0]["G"] = 2;
    table[7]["B"] = -2;
    table[7]["G"] = -2;

    //bispo
    table[0]["C"] = 3;
    table[0]["F"] = 3;
    table[7]["C"] = -3;
    table[7]["F"] = -3;

    //torre
    table[0]["A"] = 4;
    table[0]["H"] = 4;
    table[7]["A"] = -4;
    table[7]["H"] = -4;

    //rainha
    table[0]["D"] = 5;
    table[7]["D"] = -5;

    //rei
    table[0]["E"] = 6;
    table[7]["E"] = -6;

}

function move(jogador){
    console.log('jogador ' + jogador + " sua vez de jogar")
    let cL = parseInt(prompt("Linha:")) - 1
    let cC = prompt("Coluna: ").toUpperCase()

    if (table[cL][cC] != undefined){
        let piece = table[cL][cC]
        if (piece == 0){
            console.log("nenhuma peça selecionada")
            return move(jogador)
        }

        if ((piece < 0 & jogador < 0) || (piece > 0 & jogador > 0) ){
            const pieces = {1: "piao", 2:"cavalo", 3:"bispo", 4:"torre", 5:"rainha", 6:"rei"}
            console.log("peça selecionada: " + (piece > 0) ? pieces[piece] : pieces[piece * -1])
            let nL = parseInt(prompt("Nova Linha: ")) - 1
            let nC = prompt("Nova Coluna: ").toUpperCase()
            if (table[nL][nC] != undefined){
               if(!((piece < 0 & table[nL][nC] < 0) || (piece > 0 & table[nL][nC] > 0))){
                table[cL][cC] = 0
                table[nL][nC] = piece
               }else{
                console.log("há uma peça no lugar")
                return move(jogador)
               }
            }else{
                console.log("posição invalida")
                return move(jogador)
            }
        }else{
            console.log("Peça selecionada não é sua")
            return move(jogador)
        }
    }else{
        console.log("posição invalida")
        return move(jogador)
    }
}

initializeTable();
showTable();
move(1)
showTable()