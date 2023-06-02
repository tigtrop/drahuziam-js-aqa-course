function task1() {
    console.log("Task 1 - Виведіть в консоль числа від 1 до n використовуючи цикл for.")

    const n = 10

    for(let i=1; i<n+1; i++) {
        console.log(i) 
     }
}

function task2() {
    console.log("Task 2 - Напишіть цикл, який обчислює суму чисел від 1 до n. ")

    const n = 100

    let sum=0
    let i=1
    while(i<101){
        sum=sum+i
        i++
    }
    return sum
}

function task3() {
    console.log("Task 3 - Використовуючи цикл while, виведіть в консоль числа від n до 1. ")

    let n = 10

    while(n>0) {
        console.log(n)
        n-=1
    }
}

function task4() {
    console.log("Task 4 - Напишіть цикл, який виводить всі парні числа від 1 до n.")

    let n = 50
    let i = 1

    while(i<=50) {
        if(i%2==0){
            console.log(i)
        }

        i++
    }
}

function task5() {
    console.log("Task 5 - Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли.")

    let n = 10
    let i = 1
    let one = 1
    while(i<=n) {
        console.log(one+"x"+i+"="+one*i)
        i++

        if(i>n){
            i=1
            one+=1
            while(i<=n){
                console.log(one+"x"+i+"="+one*i)
                i++

                if(i>n){
                    i=1
                    one+=1
                    while(i<=n){
                        console.log(one+"x"+i+"="+one*i)
                        i++

                        if(i>n){
                            i=1
                            one+=1
                            while(i<=n){
                                console.log(one+"x"+i+"="+one*i)
                                i++

                                if(i>n){
                                    i=1
                                    one+=1
                                    while(i<=n){
                                        console.log(one+"x"+i+"="+one*i)
                                        i++

                                        if(i>n){
                                            i=1
                                            one+=1
                                            while(i<=n){
                                                console.log(one+"x"+i+"="+one*i)
                                                i++

                                                if(i>n){
                                                    i=1
                                                    one+=1
                                                    while(i<=n){
                                                        console.log(one+"x"+i+"="+one*i)
                                                        i++

                                                        if(i>n){
                                                            i=1
                                                            one+=1
                                                            while(i<=n){
                                                                console.log(one+"x"+i+"="+one*i)
                                                                i++

                                                                if(i>n){
                                                                    i=1
                                                                    one+=1
                                                                    while(i<=n){
                                                                        console.log(one+"x"+i+"="+one*i)
                                                                        i++

                                                                        if(i>n){
                                                                            i=1
                                                                            one+=1
                                                                            while(i<=n){
                                                                                console.log(one+"x"+i+"="+one*i)
                                                                                i++
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            
                        }
                    }
                }
            }
        }
    }
}

function task6(n) {
    console.log("Task 6 - Обчисліть факторіал числа n, використовуючи цикл.")

    let fact = 1

    for(let i = 1; i<=n;i++) {
        fact = fact*i
    }
    return fact
}

function task7(n) {
    console.log("Task 7 - Виведіть перші n чисел послідовності Фібоначчі.")

let n1 = 0, n2 = 1
let next = 0

for (let i = 1; i <= n; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
}

function task8(n) {
    console.log("Task 8 - Виведіть всі прості числа від 1 до n.")

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

function task9(n) {
    console.log("Task 9 - Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)")

    let numbers = []

    let i=1
    while(i<=n){
        numbers.push(i)
        i++
    }

    let i2=1

    while(i2<=n){
        if(numbers[i2]%5==0) {
            console.log(numbers[i2])
        }
        i2++
    }
}

function task10() {
    console.log("Task 9 - Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])")

    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sum = 0
    for (let i = 0; i<array1.length; i++) {
        sum = sum + array1[i]
    }
    console.log(sum)
}

//task1()
//console.log(task2())
//task3()
//task4()
//task5()
//console.log(task6(7))
//task7(10)
//task8(100)
//task9(100)
//task10()
