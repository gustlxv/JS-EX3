let not1 = Number(prompt("Digite a primeira nota:"));
let not2 = Number(prompt("Digite a segunda nota:"));
let not3 = Number(prompt("Digite a terceira nota:"));
let soma = (not1 + not2 + not3) / 3;
let req =
    soma >= 6
        ? "Você foi aprovado"
        : "Você foi reprovado";

alert(`A sua média é ${soma.toFixed(2)}\n${req}`);