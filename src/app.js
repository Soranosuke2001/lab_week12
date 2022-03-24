//Part 2
function selectingElement() {
    const firstelement = document.querySelector('#main')
    console.log(firstelement)
}


//Part 3
function GradeAccumulator(students, studentNumber) {
    let accumulatedGrades = 0
    let gradeAverage = 0

    for (let eachGrade = 0; eachGrade < 4; eachGrade++) {
        accumulatedGrades = accumulatedGrades + students[studentNumber].grades[eachGrade];
    }

    gradeAverage = accumulatedGrades / 4
    return gradeAverage
  }

function GradeList(studentsScholarship, gradeAverage, students, studentNumber) {
    if (gradeAverage > 79) {
        studentsScholarship.push({ name: students[studentNumber].name, grades: gradeAverage });
    }  

    return studentsScholarship
}

function GetScholarship(students) {
    let studentsScholarship = []
    let studentlist = students.length

    for (let studentNumber = 0; studentNumber < studentlist; studentNumber++) {
        gradeAverage = GradeAccumulator(students, studentNumber)

        studentsScholarship = GradeList(studentsScholarship, gradeAverage, students, studentNumber)
    }
  
    console.log(studentsScholarship)
}

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]


