const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n');
    const keys = data[0].split(',');
    const students = [];
    const studentsFields = {}
    for (const student of data.slice(1)) {
      if (student.length) {
          const listStudent = student.split(',');
          students.push(Object.fromEntries(
            keys.map((key, index) => [key, listStudent[index]])
          ));
          const field = listStudent[listStudent.length - 1];
          if (!Object.keys(studentsFields).includes(field)) {
            studentsFields[field] = [];
          }
          studentsFields[field].push(listStudent[0])
        }
    }
    console.log(studentsFields)
    console.log('Number of students: ' + students.length);
    for (const [field, group] of Object.entries(studentsFields)) {
      console.log(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
