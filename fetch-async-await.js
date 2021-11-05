//////////////////////////////////////////////////////////////////////////////////////////
// FETCH                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////

const { EventEmitter } = require("stream");

// Retorna uma PROMISE

// É possível usar outros tipos de request como method (POST), além do body
// usando o segundo argumento, além do body, no segundo parâmetro

fetch('example.json').then(responseStream => {
    // Mostra que carregou o arquivo com sucesso (Status 200): console.log(responseStream);
    if(responseStream.status  === 200) {
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
})
    .then(data => {
    console.log(data);
    })

    // Catch só pega erro de rede
    .catch(err => {
        console.log('Erro: ', err);
    });


//////////////////////////////////////////////////////////////////////////////////////////
// ASYNC / AWAIT                                                                        //
//                                                                                      //
// Forma de criar Promises de maneiras simples e lidar com outras dentro delas          //
// Await espera que outras Promises sejam resolvidas                                    //
//////////////////////////////////////////////////////////////////////////////////////////

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 5000);
});

// Processamento assíncrono de maneira sequencial, como se fosse síncrono
const simpleFuncSequencial = async () => {
    // throw new Error('Oh no!');

    // Espera a Promise asyncTimer com timer seja resolvida antes de dar sequência
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('example.json').then(dataStream => dataStream.json());
    return dataJSON;
}

// Processamento assíncrono de maneira paralela
const simpleFuncParalelo = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('example.json').then(dataStream => dataStream.json())
    ]);
    return data;
}

simpleFuncParalelo().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});