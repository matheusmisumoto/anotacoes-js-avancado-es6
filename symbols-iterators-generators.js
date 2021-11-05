//////////////////////////////////////////////
// SYMBOLS                                  //
// Geração de identificador único           // 
//////////////////////////////////////////////

const uniqueID = Symbol('Hello'); // não use new

// const obj = {
//    [uniqueID]: 'Hello'
// };

// console.log(obj);

// WELL KNOWN SYMBOLS
// Symbol.iterator; Symbol.split; Symbol.toStringTag; ...

const arr = [1,2,3,4];
const str = 'Digital Innovation One';


//////////////////////////////////////////////
// ITERADORES                               //
// Interfaces para fazer alterações         //
//////////////////////////////////////////////

// console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;
        
                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

//const arr2 = [...obj];
//console.log(arr2);

//for(let value of arr2){
//    console.log(value);
//}


//////////////////////////////////////////////
// GENERATORS                               //
//////////////////////////////////////////////

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
    yield 3;
}
const it1 = hello();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next('Outside'));


function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}
const it3 = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Atenção ao asterisco antes de Symbol.iterator
const obj2 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for(let value of obj2){
    console.log(value);
}