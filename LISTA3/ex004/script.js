let id1 = Number(prompt("Digite uma idade:"));
let id2 = Number(prompt("Digite uma segunda idade:"));
let resultado =
    id1 > id2
        ? "A primeira pessoa é mais velha"
        : id2 > id1
        ? "A segunda pessoa é mais velha"
        : "Vocês tem a mesma idade";

alert(resultado);