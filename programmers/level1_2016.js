/*
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

입출력 예
a	b	result
5	24	"TUE"
*/

function solution(a, b) {
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let day = week.indexOf('FRI') - 1;

    while (a > 1) {
        a--;
        switch (a) {
            case 2: day += 29; break;
            case 1: case 3: case 5: case 7: case 8: case 10: case 12: day += 31; break;
            default: day += 30; break;
        }
    }

    return week[(day + b) % week.length];
}
