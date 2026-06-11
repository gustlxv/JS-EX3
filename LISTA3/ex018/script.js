let letra = prompt("Digite uma letra:");
let verificacao =
    letra === letra.toUpperCase()
        ? "Letra maiúscula"
        : "Letra minúscula";

alert(verificacao);