export function functionResult(x: number): number {
  return Math.pow(x, 2) - 2 * Math.cos(x) + 1;
}

export function functionX(x: number): number {
  return x - (Math.pow(x, 2) - 2 * Math.cos(x) + 1) / 20;
}
