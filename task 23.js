// Задача 23
// Напишите программу, которая принимает на вход число (N) и выдаёт таблицу кубов чисел от 1 до N.
// 3 -> 1, 8, 27
// 5 -> 1, 8, 27, 64, 125

function calc(N){
    for(let i=1; i<=N; i++){
      console.log(Math.pow(i, 3));
    }
  return `${N} в кубе`
}


console.log(calc(3));
console.log(calc(5));