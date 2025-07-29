/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 90;
let grade;
// your code
let gradeF = (score >= 0 && score <= 49);
let gradeD = (score >= 50 && score <= 69);
let gradeC = (score >= 70 && score <= 79);
let gradeB = (score >= 80 && score <= 89);

if (gradeF) {
    grade = 'F';
} else if (gradeD) {
    grade = 'D';
} else if (gradeC) {
    grade = 'C';
} else if (gradeB) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log(grade);

