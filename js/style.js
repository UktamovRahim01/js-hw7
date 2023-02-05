// ввод массива с элементами
let arr = [1, 2, `hello`, 24, `world`, undefined, null, `error`, 22];
let arr2 = [1, 2, `hello`, 24, `world`, undefined, null, `error`, 22];
console.log(`изначальный массив`);
console.log(arr2);
// начала цыкла с перебором элементов массива
for (let i = 0; i < arr.length; i++) {
    // условие сравнения типа элементов
    if (typeof (arr[i]) !== `number`) {
        arr.splice(i, 1);
        i = i - 1;
    }
}
// проверка
console.log(`маасив после фильтрации`);
console.log(arr);

// задание №2
console.log(`количество элементвов типа Number = ` + arr.length);
// сравнение количества элементов данного типа
if (arr.length > 5) {
    console.log(`good`);
} else {
    console.log(`exselend`);
}


// задание №2 альтернаттива

// let b = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i]) !== `number`) {
//         b = b + 1;
//     }
// }
// console.log(`количество элементвов типа Number = ` + b);