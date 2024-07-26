// 1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오
let name = "noona's fruit store"
let fruits = ["banana", "apple", "mango"]
let address = "Seoul"

let store = {
    name,
    fruits,
    address
}

// 2. es6 문법을 이용하여 다음과 같이 출력하시오
let storeName = "noona's fruit store";
let storeLocate = 'Seoul';
let print = `제 가게 이름은 ${storeName} 입니다. 위치는 ${storeLocate} 에 있습니다`;

// 3. 다음 코드를 Destructoring을 이용하여 해결하시오
function calculate(obj) {
    let {a, b, c} = obj;
    return a + b + c;
}

calculate({a: 1, b: 2, c: 3});

// 4. 다음 문제에 정답이 true가 나오게 하시오
let name1 = "noona store"
let fruits1 = ["banana", "apple", "mango"]
let address1 = {
    country: "Korea",
    city: "Seoul"
}

function findStore(obj) {
    console.log(obj)
    let {name1, address1: {city}} = obj;
    return name1 === "noona store" && city === "Seoul"
}

findStore({name1, fruits1, address1});

// 5. 다음과같이 프린트되게 코드를 바꾸시오
function getNumber() {
    let array = [1, 2, 3, 4, 5, 6]    // 여기서부터 바꾸시오
    let [first, , third, forth] = array;
    return {first, third, forth};
}

getNumber() //  결과값 { first: 1, third: 3, forth: 4 }

// 6. 다음의 결과가 true가 되게 하시오
function getCalendar(first, ...rest) {
    return (
        first === "January" &&
        rest[0] === "Febuary" &&
        rest[1] === "March" &&
        rest[2] === undefined
    );
}

getCalendar('January', 'Febuary', 'March'); // 여기를 바꾸시오

// 7. 두 어레이들중 최소값을 찾는 함수를 완성하시오
function getMinimum() {
    let a = [45, 23, 78]
    let b = [54, 11, 9]
    return Math.min(...a, ...b); // 여기를 바꾸시오
}

// 8. 다음의 함수를 화살표 함수로 바꾸시오
function sumNumber1() {
    // 여기서부터 바꾸시오
    const sum = (a, b) => a + b;
    return sum(40, 10);
}

// 9. 다음함수를 화살표 함수로 바꾸시오
function sumNumber() {
    //여기를 바꾸시오
    let addNumber = (a) => (b) => (c) => a + b + c;
    return addNumber(1)(2)(3);
}
