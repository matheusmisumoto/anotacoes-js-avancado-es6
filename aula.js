//////////////////////////////////////////////
// TRATAMENTO DE ERROS                      //
//////////////////////////////////////////////

class CustomError extends Error {
    constructor({ message, data }){
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Matheus Misumoto';
    const MyError = new CustomError({
        message: 'Custom message on custom error',
        data: { 
            type: 'Server error'
        }
    });
    throw MyError;
} catch(err) {
    if(err.data.type == 'Server error'){
        console.log(err.data);
    } else {
        console.log('None');
    }
    console.log(err);
} finally {
    console.log('Keep going...');
}


//////////////////////////////////////////////
// CONSOLE                                  //
//////////////////////////////////////////////

// console.log('Black text');
// console.warn('Yellow text with alert');
// console.error('Red error text');
// console.trace();


// GRUPOS
// console.group('My group');
// console.log('Info inside group');
// console.log('More info inside group');
// console.groupEnd('My group');


// TEMPO DE EXECUÇÃO
// console.time('Log time');
// setTimeout(() => {
//     console.timeEnd('Log time');
// }, 2000);

// TABELA
// console.table(['Matheus Misumoto', 'Digital Innovation One']);

// DISPARA SOMENTE SE CONDIÇÃO FOR FALSA,
// ÚTIL PARA NÃO POLUIR O CONSOLE
// console.assert(1 == 0, 'Ops');

// ESTILIZAÇÃO
console.log('%c styled log', 'color: orange; font-size: 32px');

