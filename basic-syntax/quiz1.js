let a = 30;
let b = 50;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log('a = ' + a);
console.log('b = ' + b);

console.log('Hello' + '' + 2021);
console.log((1 + 3) ** 2);



let fruit = ['apple', 'mango', 'strawberry', 'pineapple'];

// of 는 순서에 맞는 값을 읽어옴.
for (let item of fruit) {
    console.log(item);
}

// in 은 순서값을 가져옴.
for (let item in fruit) {
    console.log(item)
}

let person = {
    name: "누나",
    age: 25,
    cute: true
};

// 객체의 키 값을 가져옴.
for (let key in person) {
    console.log(key)
}