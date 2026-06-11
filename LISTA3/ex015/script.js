let nota = Number(prompt("Digite uma nota de 0 a 10:"));
let notas =
    nota >= 9
        ? "Nota Excelente"
        : nota >= 7
        ? "Nota Boa"
        : nota >= 5
        ? "Nota Regular"
        : "Insuficiente";

alert(notas);