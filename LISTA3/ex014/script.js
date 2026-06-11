let temp = Number(prompt("Digite a temperatura:"));
let clima =
    temp < 15
        ? "Frio"
        : temp <= 25
        ? "Agradável"
        : "Quente";

alert(clima);