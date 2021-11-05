// Código inicial

// class Math {
//     sum = function sum(a, b){
//         return a + b;
//     }
// }

// Refatorado

class Math {

    // Tempo máximo de espera padrão para testes: 2000ms
    sum(a, b, callback){
        setTimeout(() => {
            callback(a + b);
        }, 5);
    }

    multiply(a, b) {
        return a * b;
    }

    printSum(req, res, a, b){

        // Com stub.returns
        // console.log(res.load('index', a + b));

        res.load('index', a + b);
    }
}

module.exports = Math;