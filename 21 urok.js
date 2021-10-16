

const arr = [36, 68, 7, 26, 39];

arr.sort(compareNum);  // для правильной сортироки числел
console.log(arr);
function compareNum(a, b){
   return a - b;
}  



/* arr.forEach(function(item, i, arr){
   console.log(`${i}:${item}: "внутри массива" ${arr}`);
}) */

 
 //аргумент item -элемнт который перебираем 2,4,6
//аргумент i -номер по порядку 0,1,2,3,
//аргумент arr -ссылка на массив к которому обращаемся 



//arr.pop(); //удоляет элемент с конца массива
//arr.push(6); //добавляем элемент в конец массива

//console.log(arr);
/* 
for( let i=0; i<arr.length ; i++) {
   console.log(arr[i])
}
 */
/* 
for(let mass of arr){
   console.log(mass)
} */


const str = prompt("", "");


const product = str.split(", "); //формируем массив на основание строк с помощю метода split
product.sort(); //сортирует данные в массиве как строки

console.log(product.join(";")); // join обединяет элемент массива в строку   

