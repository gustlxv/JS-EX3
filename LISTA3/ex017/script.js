let temperatura = Number(prompt("Digite a temperatura:"));
let unidade = prompt("Digite C ou F:");
let resultado =
    unidade.toUpperCase() === "C"
        ? (temperatura * 9 / 5) + 32 + "°F"
        : ((temperatura - 32) * 5 / 9).toFixed(2) + "°C";

alert(resultado);