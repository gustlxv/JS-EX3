let preco = Number(prompt("Digite o preço do seu produto:"));
let produto =
    preco < 20
        ? "Seu produto tem um preço barato"
        : preco <= 100
        ? "Seu produto tem um preço médio"
        : "Seu produto tem um preço caro";

alert(produto);