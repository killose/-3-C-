// Напишите программу, которая принимает на вход
// пятизначное число и проверяет, является ли оно палиндромом.
// 14212 -> нет
// 12821 -> да
// 23432 -> да

function palindrome(num){
    let reverseNum = String(num).split('').reverse().join('');
    return num == reverseNum ? "да" : "нет";
   }
  
  
  console.log(palindrome(14212));
  console.log(palindrome(12821));
  console.log(palindrome(23432));