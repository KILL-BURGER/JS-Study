// 1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

// 2. 1부터 100까지 홀수만 출력하자.
let oddSum = 0;
for (let i = 1; i <= 100; i += 2) {
    oddSum += i;
}

// 3. 1부터 50까지 369결과를 프린트하자.
for (let i = 1; i <= 50; i++) {
    if (i <= 10) {
        if (i === 3 || i === 6 || i === 9) {
            console.log("짝");
        } else {
            console.log(i);
        }
    } else {
        if (Math.floor(i / 10) === 3) {
            if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
                console.log('짝짝');
            } else {
                console.log("짝");
            }
        } else if (Math.floor(i / 10) !== 3) {
            if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
                console.log("짝");
            } else {
                console.log(i);
            }
        }
    }
}

// 4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
let n = 11
let isPrime = true

if (n === 1) {// 1은 소수가 아님
    isPrime = false
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false
        }
    }
}