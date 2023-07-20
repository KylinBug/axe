const calc = (a: number, b: number): number => a - b;

console.log(calc(5, 3));

const add = (a: number, b: number): number => a + b;

export default add;

// function logExecutionTime(cb) {
//   return function (...args) {
//     const start = new Date().getTime();
//     const result = cb(...args);
//     const end = new Date().getTime();
//     console.log(`${cb.name}函数共执行了${end - start}ms`);
//     return result;
//   };
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// function dynamicFib(n) {
//   if (n < 2) return n;
//   const list = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     list.push(list[i - 1] + list[i - 2]);
//   }

//   return list.at(-1);
// }

// const hocFib = logExecutionTime(fib);
// const hocDynamicFib = logExecutionTime(dynamicFib);

// console.log(hocFib(40));
// console.log(hocDynamicFib(40));
