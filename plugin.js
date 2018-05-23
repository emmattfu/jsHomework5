// Функции. Задача № 6
function newValue(array, callback) {


    return 'New value: ' + changer;
}

function changer(array){

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
    let filtredArr = [];
    for (let prop of arr) {
        if (prop.price >= lowPrice &&  prop.price <= highPrice) {
            filtredArr.push(prop.price);
        }
    }
    return filtredArr.sort((prev, next) => prev - next);
}