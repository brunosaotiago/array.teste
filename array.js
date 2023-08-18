const numeros = [1, 3, 5, 7];
numeros.unshift(0);
console.log(numeros);
numeros.unshift(0,2,4);
console.log(numeros);
numeros.push(10,20,30,40);
console.log(numeros);
console.log(numeros[11]);
numeros.splice(1, 1, 'dois');
console.log(numeros);
numeros.pop();
console.log(numeros);
let ultimoNum = numeros.pop();
console.log(numeros);
console.log(ultimoNum);
let primeiroNum = numeros.shift();
console.log(numeros);
console.log(primeiroNum);
console.log(numeros.length);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    
}
numeros.forEach(function(numero) {
    console.log(numero)
});


