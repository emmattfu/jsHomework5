// Функции. Задача № 6
function newValue(array, callback) {
    if (!arr.length) return new Error ('this array is empty');
    let result = '';
    for (let element of array) {
        result += callback(element);
    }

    return 'New value: ' + result;
}

function stringChanger(element){
    let upArr = [];
        for (let i = 0; i < element.length; i++) {
            if (i === 0 ) {
                upArr.push(element[0].toUpperCase())
            } else {
                upArr.push(element[i])
            }
        }
    return upArr.join('');
}

function numberChanger(element) {
    return element * 10 + ', ';
}

function objChanger(element) {
    for (let value in element) {

    }

    return element.name + ' is ' + element.age;
    // newValue([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}])
}

function reverse(element) {
   return element.split('').reverse().join('');
}

function numberPlus(element) {
    return element + 5 + ',';
}
//Массивы. Задачи на методы Задача № 2
function arrLastElement(arr) {
    if (!arr.length) return new Error ('this array is empty');
    return arr.pop();
}

//Массивы. Задачи на методы Задача № 3
function getArray(number) {
    let newArray = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

//Массивы. Задача № 2
let arr = [2, 4, 7, 1, -2, 10, -9];

arr.sort((prev, next) => prev - next)
    .reverse();


//Массивы. Задача № 3
function cuttedArr(arr, from, to) {
    return arr.slice(from, to + 1);
}


//Массивы. Задача № 8
let numberArr = [[14, 45], [1], ['a', 'c', 'd']];

numberArr.sort((prev, next) => prev.length - next.length);

//Массивы. Задача № 10

let processors = [
    {
        cpu: 'intel',
        info: {
            cores: 2,
            cache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            cache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            cache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            cache: 2
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            cache: 2
        }
    }
];

processors.sort((prev, next) => prev.info.cores - next.info.cores);

//Массивы. Задача № 11

const products = [
    {
        title: 'prod1',
        price: 5.2
    },
    {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    },
    {
        title: 'prod4',
        price: 25
    },
    {
        title: 'prod5',
        price: 18.9
    },
    {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    },
    {
        title: 'prod8',
        price: 63
    },
];

function filterCollection(arr, lowPrice, highPrice) {
    if (!arr.length) return new Error ('this array is empty');
    let filtredArr = [];
    for (let prop of arr) {
        if (prop.price >= lowPrice &&  prop.price <= highPrice) {
            filtredArr.push(prop.price);
        }
    }
    return filtredArr.sort((prev, next) => prev - next);
}

// ES5 Задача № 2
let oldArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let newArr = oldArr.map(element => {
    return {digit: element, odd: element % 2 === 1};
});



// ES5 Задача № 5

let stringArr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
                 {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
                 {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

stringArr.sort((prev, next) => prev.index - next.index);
let stringFromArr = stringArr.reduce((prevVal, currentItem, i, arr) => {
    return prevVal + currentItem.char;
}, '');

console.log(stringFromArr);

// Every
let arrayForEvery = [1, 2, 3, 4, 5];

function isEveryNumber(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let everyRes = isEveryNumber(arrayForEvery, (element, i, arr) => element < 0);




// some
let arrayForSome = [1, 2, 3, 4, 5];

function isEveryNumber(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let everyRes = isEveryNumber(arrayForEvery, (element, i, arr) => element < 0);