const fs = require('fs');

const readDatabase = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const fileLines = data.toString('utf-8').split('\n');
          const studentsFields = {};
          for (const student of fileLines.slice(1)) {
            if (student.length) {
              const listStudent = student.split(',');
              const field = listStudent[listStudent.length - 1];
              if (!Object.keys(studentsFields).includes(field)) {
                studentsFields[field] = [];
              }
              studentsFields[field].push(listStudent[0]);
            }
          }
          resolve(studentsFields);
        }
    });
};

module.exports = readDatabase;
