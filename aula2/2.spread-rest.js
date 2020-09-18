// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c"];

// const numeros = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const novoArray = [...numeros, ...letras];

console.log(novoArray);

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

const pessoa = {
  nome: "Lindemberg",
  sobrenome: "Castro",
  idade: 42,
  endereco: {
    rua: "Av Fortaleza",
    numero: 1000,
  },
};

// Atribuição via desestruturação
const { nome, ...rest } = pessoa;

console.log(rest);
