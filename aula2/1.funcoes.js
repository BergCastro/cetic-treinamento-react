// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  return "oi";
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  const igual = 1 === "1";
  return igual;
};

funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
