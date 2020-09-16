console.log('Hello world');
console.log('Hello world');
console.log(`Hello world`);

console.log('This is the outer level');
console.group();
console.log('Level 2');
console.group();
console.log('Level 3');
console.warn('More of level 3');
console.groupEnd();
console.log('Back to level 2');
console.groupEnd();
console.debug('Back to the outer level');

console.time('answer time'); // inicia um contador de tempo
console.log(`Hello world`);
console.timeEnd('answer time'); // encerra um contador de tempo
