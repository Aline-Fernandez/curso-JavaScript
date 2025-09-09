const cidades = [{
    piracicabana: 400000,
    saoPaulo: 11000000,
    serraSaudade: 833,
    bora: 907
}
];

const cidadesObj = cidades[0];

for (const nome in cidadesObj) {

if (cidadesObj[nome] > 300000) {
    console.log(`${nome}: Cidade Grande`);
}
else {
        console.log(`${nome}: Cidade Pequena`);
     }
}
