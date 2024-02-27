const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data.toString('utf-8').split('\n');
      const keys = fileLines[0].split(',');
      const students = [];
      const studentsFields = {}
      for (const student of fileLines.slice(1)) {
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
      console.log('Number of students: ' + students.length);
      for (const [field, group] of Object.entries(studentsFields)) {
        console.log(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;