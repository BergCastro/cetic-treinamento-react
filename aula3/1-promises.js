function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

// esperaAi(3, rand(1, 4))
//   .then((valor) => console.log(valor))
//   .catch((e) => console.log("erro", e));

const promises = [
  esperaAi("Promise 1", rand(1, 5)),
  esperaAi("Promise 2", rand(1, 5)),
  esperaAi("Promise 3", rand(1, 5)),
];

// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch();

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch();
