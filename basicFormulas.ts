function functionDerivative(x: number){
  return 2 * Math.sin(x) + 2*x;
}

export function functionResult(x: number): number {
  return Math.pow(x, 2) - 2 * Math.cos(x) + 1;
}  

export function functionX(x: number): number {
  return x - (Math.pow(x, 2) - 2 * Math.cos(x) + 1) / 20;
}  

export function chordMethodFunction(a: number, b: number): number {
  return a - (b-a)/(functionResult(b) - functionResult(a)) * functionResult(a);
}  

export function functionNewtonMethodX(x: number){
  return x - functionResult(x)/functionDerivative(x);
}