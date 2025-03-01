import { functionResult, functionX } from "../basicFormulas";

import type { Result } from "../types";

export function dichotomyMethod(
  a: number,
  b: number,
  e: number
): Result | null {
  let isAnyX: boolean = functionResult(a) * functionResult(b) < 0;
  if (!isAnyX) return null;

  let x_0: number = 0;
  let counter: number = 0;
  while (true) {
    if (Math.abs(b - a) < e) break;

    counter += 1;
    x_0 = (a + b) / 2;

    let f_1: number = functionResult(a);
    let f_2: number = functionResult(x_0);

    if (f_1 * f_2 < 0) {
      //"В промежутке от х0 до b нет пересечения с осью Х, присваиваем посчитанную середину точке b"
      b = x_0;
    } else {
      //"В промежутке от a до x0 нет пересечения с осью Х, присваиваем посчитанную середину точке a"
      a = x_0;
    }
  }

  return {
    x: (a + b) / 2,
    counter: counter,
  };
}

export function simpleIterationsMethod(
  a: number,
  b: number,
  e: number
): Result | null {
  let isAnyX: boolean = functionResult(a) * functionResult(b) < 0;
  if (!isAnyX) return null;

  let x0: number = functionX((a + b) / 2);
  let x: number = x0;
  let xNext: number = functionX(x0);
  let counter: number = 0;

  while (true) {
    if (Math.abs(xNext - x) < 2 * e) break;
    counter++;
    x = xNext;
    xNext = functionX(xNext);
  }
  return { x: xNext, counter: counter };
}
