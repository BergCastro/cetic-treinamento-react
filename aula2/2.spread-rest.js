// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
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
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
