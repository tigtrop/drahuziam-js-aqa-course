function logNumbersFrom1toNum(num) {
    console.log("Task 1 - Виведіть в консоль числа від 1 до n використовуючи цикл for.");

    for(let i=1; i<num+1; i++) {
        console.log(i) ;
     }
}

function logSumFrom1toNum(n) {
    console.log("Task 2 - Напишіть цикл, який обчислює суму чисел від 1 до n. ");

    let sum=0;
    let i=1;
    while(i<101){
        sum=sum+i;
        i++;
    }
    console.log(sum);
}

function logNumbersFromNumTo1(n) {
    console.log("Task 3 - Використовуючи цикл while, виведіть в консоль числа від n до 1. ");

    while(n>0) {
        console.log(n);
        n-=1;
    }
}

function logPairedNumbersFrom1toNum(n) {
    console.log("Task 4 - Напишіть цикл, який виводить всі парні числа від 1 до n.");

    let i = 1;

    while(i<=50) {
        if(i%2==0){
            console.log(i);
        }

        i++;
    }
}

function logMultiplicationTable(n) {
    console.log("Task 5 - Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли.");

    for(let one = 1; one <= n ; one++){
        for(let two = 1 ; two <= n ; two++) {
            let sum = one*two;
            console.log(`${one} x ${two} = ${sum}`);
        }
    }
}

function logNumFactorial(n) {
    console.log("Task 6 - Обчисліть факторіал числа n, використовуючи цикл.")

    let fact = 1;

    for(let i = 1; i<=n;i++) {
        fact = fact*i;
    }
    console.log(fact);
}

function logNumFiboNumbers(n) {
    console.log("Task 7 - Виведіть перші n чисел послідовності Фібоначчі.");

let n1 = 0, n2 = 1;
let next = 0;

for (let i = 1; i <= n; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
}

function logSimpleNumbersFrom1toNum(n) {
    console.log("Task 8 - Виведіть всі прості числа від 1 до n.");

    function isPrimeNumber(n) {
        if (n < 2) {
          return false;
        }
        for (let i = 2; i < n; i++) {
          if (n % i == 0) {
            return false;
          }
        }
        return true;
      }
      
      for (let i = 1; i <= 100; i++) {
        if (isPrimeNumber(i)) {
          console.log(i);
        }
      }
    
}

function logNumbersThatDevideTo5(n) {
    console.log("Task 9 - Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)");

    let numbers = [];

    let i=1;
    while(i<=n){
        numbers.push(i);
        i++;
    }

    let i2=1;

    while(i2<=n){
        if(numbers[i2]%5==0) {
            console.log(numbers[i2]);
        }
        i2++;
    }
}

function logSumFromArray(array1) {
    console.log("Task 10 - Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])");

    let sum = 0;
    for (let i = 0; i<array1.length; i++) {
        sum = sum + array1[i];
    }
    console.log(sum);
}

logNumbersFrom1toNum(10);
logSumFrom1toNum(100);
logNumbersFromNumTo1(10);
logPairedNumbersFrom1toNum(50);
logMultiplicationTable(10);
logNumFactorial(7);
logNumFiboNumbers(10);
logSimpleNumbersFrom1toNum(100);
logNumbersThatDevideTo5(100);
logSumFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);