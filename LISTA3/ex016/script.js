let id = Number(prompt("Digite sua idade:"));
let br =
    id >= 18
        ? "Você é maior de idade no Brasil"
        : "Você é menor de idade no Brasil";

let eua =
    id >= 21
        ? "Você é maior de idade nos Estados Unidos"
        : "Você é menor idade nos Estados Unidos";

alert(`${br}\n${eua}`);