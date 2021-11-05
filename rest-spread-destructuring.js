//////////////////////////////////////////////
// REST OPERATOR                            //
// Transforma os parâmetros em array = ...  //
//////////////////////////////////////////////

function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

const multiply = (a, b, ...rest) => a * b * rest.reduce((acc, value) => acc * value, 1);

console.log(sum(6,4,7,3));
console.log(multiply(6,4,7,3));


//////////////////////////////////////////////////////////////////
// SPREAD OPERATOR                                              //
// Pega os itens dos arrays e transforma em parâmetro) = ...    //
// Strings, arrays e objetos e objetos iteráveis                //
//////////////////////////////////////////////////////////////////

const test = (...rest) => {
    return multiply(...rest);
}
console.log(test(1,2,3,4));


const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7, 8];

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {
    ...obj,
    subObj: {
        ...obj.subObj
    },
    test2: 'Hello World'
};

function logArgs(a, b, ...c){
    console.log(a, b, c);
};

obj2.subObj.test = 456;

logArgs(...str);
logArgs(...arr);
logArgs(...arr2);
console.log(obj);
console.log(obj2);


//////////////////////////////////////////////
// DESTRUCTURING ASSIGNMENT                 //
//////////////////////////////////////////////

// de
var arrD = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple0 = arrD[0];
var banana0 = arrD[1];
var orange0 = arrD[2];
var tomato0 = arrD[3][0];

var objD = {
    name : 'Matheus',
    props: {
        age: 25,
        favoriteColors: ['red', 'blue']
    }
}
var nameD0 = objD.name;
var age = objD.props.age;
var color1 = objD.props.favoriteColors;

// para
var [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
var { name } = objD;
var { name: name2 } = objD;
var { 
    props: 
    { age }
} = objD;
var { 
    props: { 
        age: age2,
        favoriteColors: [color1, color2]
    }
} = objD;

console.log(tomato0, tomato);
console.log(nameD0, name, name2);
console.log(age, age2, color1, color2);