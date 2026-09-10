let produtos = [
    { produto: "Qboa", valor: 10.00 },
    { produto: "Farinha", valor: 8.00 },
    { produto: "Fermento", valor: 5.00 },
    { produto: "Chocolate", valor: 11.00 },
    { produto: "Coca-Cola", valor: 6.00 },
    { produto: "Trident", valor: 4.00 }
];


const MaiorDeCinco = produtos.findIndex((u) => u.valor < 5);
console.log(MaiorDeCinco)


for (let index = 0; index < produtos.length; index++) {
    const produtinho = produtos[index];
    if (produtinho.valor > 10) {
        console.log(produtinho);
        break;
    }
};