/*
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

입출력 예
n	result
45	7
125	229

입출력 예 설명
입출력 예 #1
답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
45	1200	0021	7
따라서 7을 return 해야 합니다.

입출력 예 #2
답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
125	11122	22111	229
따라서 229를 return 해야 합니다.
*/

function solution(n) {
    var answer = 0;
    let nums = [];

    while (true) {
        if (n < 3) {
            nums.push(n);
            break;
        }
        nums.push(n % 3);
        n = Math.floor(n / 3);
    }

    nums.forEach((num, index) => {
        answer += num * Math.pow(3, nums.length - index - 1);
    });

    return answer;
}

function solution2(n) {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

/*
toString() 은 기수(radix)를 매개변수 취급
기수의 값은 2 ~ 36
기수를 이용하여 10진수를 2 ~ 36 진수로 변환할 수 있음

let n = 45;
n.toString(3);   // -> '1200', 45를 3진수로 변환
*/
