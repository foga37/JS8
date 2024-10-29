
// 1. Створіть функцію для обчислення факторіалу числа.
//    Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
//    і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.
console.log('1. Створіть функцію для обчислення факторіалу числа. Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число) і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.');
function calculateFactorial(n) {
    let resultat = 1;
    while(n) {
        resultat *= n--;
    }
    return resultat;
} 
console.log('наприклад 7');
console.log(calculateFactorial(7));
//2. Підрахунок кількості букв у рядку.
//Створіть функцію countSymb(sym), яка приймає рядок через prompt
//і виводить в консоль кількість букв у цьому рядку.
//Використовуйте умови та цикли для підрахунку букв.
//** Підказка стрічку також можна ітерувати, використваши .length
console.log('2. Підрахунок кількості букв у рядку.Створіть функцію countSymb(sym), яка приймає рядок через promptі виводить в консоль кількість букв у цьому рядку.Використовуйте умови та цикли для підрахунку букв.** Підказка стрічку також можна ітерувати, використваши .length');
function countSymb(sym) {
    let letter = 0;
    for (let i = 0; i < sym.length; i++) {
        letter++
    } return letter;
} 
let pro = prompt('кількість букв у рядку буде в консолі')
console.log(countSymb(pro));
//3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
//Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
//якщо число є простим, і false, якщо не є.
//** Просте число це 3, 56, 23
//   Не просте це 1.33, 4.1, 55.222
console.log('3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,якщо число є простим, і false, якщо не є.** Просте число це 3, 56, 23 Не просте це 1.33, 4.1, 55.222');
function isPrime(number) {
        if(number % 1 ===0) {
            console.log('Просте число');
            return true;
        } console.log('Не просте число');
         return false;
        }
console.log('до числа 22');
console.log(isPrime(22));
console.log('до числа 22.2');
console.log(isPrime(22.2));


//4. Запит на пароль.
//Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
//Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.
console.log('4. Запит на пароль.Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.');
function passwordPrompt() {
    let pass = prompt('Введіть пароль')
    let pass1 = prompt('Підтвердіть пароль')
    if (pass1 == pass) {
        console.log('Успіх');
    } else if (pass1 != pass) 
        console.log('Невдача');
}
passwordPrompt()

//5. Факторіал чисел в діапазоні.
//Створіть функцію factorialRange(num1, num2, num3),
//яка приймає 2 числа.
//Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести
console.log('5. Факторіал чисел в діапазоні.Створіть функцію factorialRange(num1, num2, num3),яка приймає 2 числа.Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді обєкта {num1: num2, num3: } і вивести');

function factorialRange(num1, num2) {
    const result = {};

    for (let i = num1; i <= num2; i++) {
        result[i] = calculateFactorial(i);  //(функція обчислення факторіалу з першого завдання 'calculateFactorial')
    }
    return result;
}
console.log(factorialRange(3, 6));

//6. Калькурятор.
//Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//Результат повернути (return) і вивести
console.log('6. Калькурятор.Створіть функцію calc(num1, num2, action), яка приймає 2 числа з promptта знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)Результат повернути (return) і вивести');

const num1 = +prompt('number1')
const num2 = +prompt('number2')
const action = prompt('action (+,-,*,/)')
function calc (num1, num2, action) {
    switch (action) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
    }
};
console.log(calc(num1, num2, action));