/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예
n	result
10	4
5	3

입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/


function solution(n) {
    let answer = 0;
    loop : for (let num = 2; num <= n; num++) {
        for (let i = 2; i < num; i++) {
            if (!(num % i)) {
                continue loop;
            } 
        }
        answer++;
    }
    return answer;
}
// -> 효율성 0점.. 나와서 찾아본 에라토스테네스의 체 
// 에라토슽테네스의 체는 소수를 찾는 방법이다

// 알고리즘
// 2부터 소수를 구하고자 하는 구간의 모든 수 나열
// 자기 자신을 제외한 2의 배수 모두 지우기
// 남아 있는 수 가운데 자기 자신을 제외한 3의 배수 모두 지우기
// ... 5의 배수 모두 지우기
// 위 과정 반복하면 남아있는 수는 소수 뿐
// i*i > n 이므로 i보다 작은 수의 배수들만 지워도 충분함


function solution(n) {
    let arr = new Array(n+1).fill(1);

    arr.fill(0, 0, 2);

    for (let i = 2; i*i < n; i++) {
        for (let j = i*i; j <= n; j += i) {
            arr[j] = 0;
        }
    }

    let answer = arr.filter(number => number !== 0);

    return answer.length;
}
