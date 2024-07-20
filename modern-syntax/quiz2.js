// 배열함수 리스트
// forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
// map : 반환값을 배열에 담아 반환한다.
// filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
// some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
// every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
// find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
// findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)

let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

// map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
let upperCaseName = names.map((item) => item.toUpperCase());

// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let firstNames = names.map((item) => item.split(' ')[0]);

// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let initialOnly = names.map((item) => {
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach((nameItem) => (initial += nameItem[0]));
    return initial;
})

// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
let includeA = names.filter((item) => item.includes('a'));

// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let doubleLetter = names.filter((item) => {
    let splitName = item.split("");
    return splitName.some((letter, index) => letter === splitName[index + 1]);
});

// some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
let allNameLength = names.some((name) => {
    return name.length >= 20;
});

// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let initExceptionName = names.some((item) => {
    let name = item.split(" ");
    name.pop(); // 성 제외
    return name.some((eachName) => eachName.toLowerCase().includes('p'))
})

// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
let everyNameLength = names.every((name) => {
    return name.length >= 20;
});

// 모두의 이름에 a 가 포함되어 있는가?
let everyNameIncludesA = names.every((name) => {
    return name.includes("a");
});

// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let nameLengthOver = names.find((name) => {
    if (name.length >= 20) {
        return name;
    }
});

// 미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)
let nameMidFirst = names.find((name) => name.split(" ").length >= 3);

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let nameLengthTw = names.findIndex((name) => {
    return name.length >= 20;
})

// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let nameMidNameIncludes = names.findIndex((name) => {
    let n = name.split(" ");
    if (n.length === 3) {
        return name;
    }
});