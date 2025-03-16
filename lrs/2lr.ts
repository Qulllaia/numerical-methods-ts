import { chordMethod, dichotomyMethod, NewtonMethod, simpleIterationsMethod } from "../mathMethods";

const _prompt = require("prompt-sync")();


let e: number = parseFloat(_prompt("Введите точность: "));

let methodType: number = parseInt(
    _prompt("Выберите метод (0 - Метод Ньютона / 1 - Метод хорд): ")
);
let result
if (methodType === 0){
    let x_0: number = parseFloat(_prompt("Введите начальное приближение: "));
    result = NewtonMethod(e, x_0)
}
else{
    let a: number = parseFloat(_prompt("Введите точку a: "));
    let b: number = parseFloat(_prompt("Введите точку b: "));
    result = chordMethod(a, b, e);
}

if (result !== null)
  console.log(
    "Искомое значение - ",
    result?.x,
    "Количество итераций - ",
    result?.counter
  );
else console.log("В данном промежутке не может быть корней");
