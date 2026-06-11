let valor = Number(prompt("Digite o valor da compra:"));
let codigo = prompt("Digite o código de desconto:");
let total =
    codigo === "DESC10"
        ? valor * 0.9
        : valor;

alert(`Valor final: R$ ${total.toFixed(2)}`);