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

// const list = ['abcde1', 'fabc2g', 'hi3ab'];

// function longestCommonSubstring(word1, word2) {
//   const rows = word1.length;
//   const cols = word2.length;
//   const grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

//   let max = 0;
//   let index = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (word1[i] == word2[j]) {
//         grid[i][j] = i === 0 || j === 0 ? 1 : grid[i - 1][j - 1] + 1;
//       } else {
//         grid[i][j] = 0;
//       }
//       if (max < grid[i][j]) {
//         max = grid[i][j];
//         index = i;
//       }
//     }
//   }

//   let str = '';
//   if (max == 0) {
//     str = '';
//   } else {
//     for (let i = index - max + 1; i <= index; i++) {
//       str += word1[i];
//     }
//   }

//   console.log('word1 =', word1, '; word2 =', word2, '; lcs=', str);
//   return str;
// }

// function search(list) {
//   if (list.length < 2) return list[0];
//   const result = [];
//   for (let index = 1; index < list.length; index++) {
//     result.push(longestCommonSubstring(list[index - 1], list[index]));
//   }
//   console.log('search result =', result);
//   return search(result);
// }

// console.log('result ==', search(list));
