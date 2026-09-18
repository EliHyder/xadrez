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
    console.log("\tA B C D E F G H");
    for (let i = 0; i < table.length; i++) {
        let row = table[i];
        let rowString = (i + 1) + "\t";
        for (let key in row) {
            rowString += row[key] + " ";
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

initializeTable();
showTable();