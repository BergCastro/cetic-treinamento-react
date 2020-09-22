// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//1 - fazer com três constantes
const pares = numeros.filter((element) => {
  return element % 2 === 0;
});
console.log("Pares: ", pares);

const dobra = numeros.map((element) => {
  return element * 2;
});
console.log("Dobrar: ", dobra);

const acumulador = numeros.reduce((n1, n2) => {
  return n1 + n2;
});
console.log("Acumulador: ", acumulador);

// 2 - fazer de forma encadeada
const resposta = numeros
  .filter((element) => {
    return element % 2 === 0;
  })
  .map((element) => element * 2)
  .reduce((n1, n2) => {
    return n1 + n2;
  });
console.log("Encadeado: ", resposta);
