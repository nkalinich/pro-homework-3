do {
    a = parseInt (prompt ("Введите значение a") .replaceAll(" ", ""));
} while(isNaN(a) || a < 1);

do {
    b = parseInt (prompt (`Введите значение b, которое больше ${a}`).replaceAll(" ", ""));
} while(a >= b || isNaN(b));

do {
    h = parseInt(prompt(`Введите шаг, который меньше ${b - a}`).replaceAll(" ", ""));
} while(h > b - a || isNaN(h));


for(sum = 0; a <= b; a += h) {
    factorial = 1;
    console.log(`Факториал числа ${a}`);

    for(i = 1; i <= a; i++) {
        factorial *= i;
    }
    console.log(`Равно ${factorial}`);
    sum += factorial;
}
console.log(`Сумма всех факториалов равна ${sum}`)




