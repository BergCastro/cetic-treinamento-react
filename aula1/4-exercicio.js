/*
Marcos Pereira Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Marcos Pereira nasceu em 1980
*/
const nome = "Marcos Pereira";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal = peso / alturaEmM * alturaEmM; // peso / (altura * altura)
let anoNascimento;

console.log(`
Nome: ${nome} ${sobrenome}  
Sobrenome: ${sobrenome} 
Idade: ${idade} 
Peso: ${peso} 
Altura: ${alturaEmM}
IndiceCorporal: ${indiceMassaCorporal}`);
