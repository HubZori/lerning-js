
/* ПРИВРАЩЕНИЕ В СТРОКУ */

//старый устаревший способ редко используемый
console.log(typeof(String(null))); 
console.log(typeof(String(4)));
//КОНКРЕТИНАЦИЯ - сложение строк с чем то ,в данном примере с числом
console.log(typeof(5 +''));
//думаю это понятно
const num = 9;
console.log('https://vk.com/dialog/' + num);




/* ПРЕВРАЩЕНИЕ В ЧИСЛО */

//старый устаревщий 
console.log(typeof(Number('4')));  
//унарный плюсь
console.log(typeof(+'96'));
//+Промт
const answ = +prompt('hello', '');


/* В БУЛИНОВЫЕ ЗНАЧЕНИЯ */
/* 0, "", null, undefined, NaN */

let switcher = null;

if (switcher) {
    console.log('Working...')
};

switcher=1
if (switcher) {
    console.log('Working...')
};

//c помощю Boolean устаревший 
console.log(typeof(Boolean('4')));  

//редко используемый 
console.log(typeof(!!'4'));
