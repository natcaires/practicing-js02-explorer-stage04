/*
  Create a list of students and their scores for a few tests,
  then calculate the average grade they got with all their test scores.

  Show a message displaying their grades and telling the if they passed 
  or failed the course.
*/


const studentList = [
	{
		name: "Joao",
		grade1: 9,
    grade2: 5,
    grade3: 7,
	},
	{
		name: "Maria",
		grade1: 6,
    grade2: 8,
    grade3: 2,
	},
	{
		name: "Jose",
		grade1: 5,
    grade2: 4,
    grade3: 6,
  },
	{
		name: "Carla",
		grade1: 1,
    grade2: 2,
    grade3: 1,
	}
]

function studentGrade(student) {
  let averageGrade = (student.grade1 + student.grade2 + student.grade3) / 3

  averageGrade = averageGrade.toFixed(2)

  if (averageGrade >= 6) {
    console.log(`${student.name}'s average grade is: ${averageGrade}`);
    return `Congratulations, ${student.name}! Your average grade was ${averageGrade}, you passed!`
  } else if (averageGrade < 3) {
    return `Sorry, ${student.name}. Your average grade was ${averageGrade}. You failed this course.`
  } else {
    return `${student.name}, your average grade was ${averageGrade}. But you still have one retake.`
  }
}

for (let student of studentList) {
  alert(studentGrade(student))
}