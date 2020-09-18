// Retorne a soma do dobro de todos os pares
// -> Filtrar pares (filter)
// -> Dobrar os valores (map)
// -> Reduzir (somar tudo) (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor), 0);
console.log(resultado);

//1 - fazer com três constantes
// 2 - fazer de forma encadeada

const resultadoFiltragem = numeros.filter((valor) => valor % 2 === 0);
const resultadoDobra = resultadoFiltragem.map((valor) => valor * 2);
const resultadoAcumulacao = resultadoDobra.reduce((acumulador, valor) => (acumulador += valor), 0);
console.log(resultadoAcumulacao);
