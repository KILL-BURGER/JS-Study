// 1. "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
function greet() {
    console.log('안녕 내 이름은 제시카야');
}

// 2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
function greet_2(name) {
    console.log('안녕 내 이름은', name, '야');
}

// 3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
function greet_3(name) {
    return '안녕 내 이름은 ' + name + '야';
}

// 4. meetAt 함수를 만들어주세요.
function meetAt(year, month, day) {
    if (day) {
        return `${year}/${month}/${day}`;
    } else if (month) {
        return `${year}년 ${month}월`;
    } else if (year) {
        return `${year}년`;
    }
}

// 5.findSmallestElement 함수를 구현해 주세요.
function findSmallestElement(arr) {
    let min = arr[0];
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

// 6. 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오.
function billCoinCount(money) {
    const denominations = [50000, 10000, 5000, 1000, 500, 100];
    for (let denomination of denominations) {
        console.log(`${denomination} X ${Math.floor(money / denomination)}`);
        money %= denomination;
    }
}