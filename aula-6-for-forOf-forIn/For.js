/* 
Estrutura de repetição - LOOP
    - FOR
    1 INICIALIZAÇÃO - Criar uma variável e colocar
                      um valor

    2 CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                Ele irá verificar antes de cada iteração
                
    3 EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o
                        nosso laço der uma volta
                        
    
    for ([inicialização]; [condição]; [expressão final]) {
    seu código aqui
    }
*/
/*for(let i = 0; i < 10; i ++){
    console.log(i)
}*/

const users = ['Maria', 'Aline', 'João']

for(let i = 0; i < users.length; i++){
 console.log(users[i])
}
