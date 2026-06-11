let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));
let imc = peso / (altura * altura);
let classificacao =
    imc < 18.5
        ? "Abaixo do peso"
        : imc < 25
        ? "Peso normal"
        : imc < 30
        ? "Sobrepeso"
        : "Obesidade";

alert(`IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);