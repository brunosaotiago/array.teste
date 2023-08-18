let nomes = ['bruno', 'paula', 'chico', 'daniel', 'breno', 'ricardo', 'joao', 'ana', 'maria', 'vitor'];
let idades = [31, 39, 35, 45, 55, 65, 30, 31, 9, 12];
let cores = ['verde', 'azul', 'cinza', 'lilas', 'preto', 'laranja', 'rosa', 'grafite', 'ouro', 'prata'];
console.log(nomes, idades, cores);
idades.splice(1, 1, 98);
cores.splice(1, 1, 'furta-cor');
console.log(idades, nomes, cores);
