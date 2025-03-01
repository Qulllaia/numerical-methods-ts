import { dichotomyMethod, simpleIterationsMethod } from "./mathMethods";

const _prompt = require("prompt-sync")();

let a: number = parseFloat(_prompt("Введите точку a: "));
let b: number = parseFloat(_prompt("Введите точку b: "));
let e: number = parseFloat(_prompt("Введите точность: "));

let methodType: number = parseFloat(
  _prompt("Выберите метод (0 - Метод дихотомии / 1 - Метод простых итераций): ")
);

let result = methodType
  ? simpleIterationsMethod(a, b, e)
  : dichotomyMethod(a, b, e);
if (result !== null)
  console.log(
    "Искомое значение - ",
    result?.x,
    "Количество итераций - ",
    result?.counter
  );
else console.log("В данном промежутке не может быть корней");
