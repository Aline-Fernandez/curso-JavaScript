/*
  Estrutura de Repetição - LOOP
  - FOR IN
  - Usando para iterar Objetos
*/

const user = {
    name: 'Aline',
    age: 31,
    street: 'Rua Poá'
}


//console.log(user['name'])

for(let key in user){
    console.log(`${key} : ${user[key]}`)
    }