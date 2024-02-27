const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const database = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data.toString('utf-8').split('\n');
      const keys = fileLines[0].split(',');
      const students = [];
      const studentsFields = {};
      for (const student of fileLines.slice(1)) {
        if (student.length) {
          const listStudent = student.split(',');
          students.push(Object.fromEntries(
            keys.map((key, index) => [key, listStudent[index]]),
          ));
          const field = listStudent[listStudent.length - 1];
          if (!Object.keys(studentsFields).includes(field)) {
            studentsFields[field] = [];
          }
          studentsFields[field].push(listStudent[0]);
        }
      }
      const respons = [];
      respons.push(`Number of students: ${students.length}`);
      for (const [field, group] of Object.entries(studentsFields)) {
        respons.push(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
      }
      resolve(respons);
    }
  });
});

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  countStudents(database)
    .then((report) => {
      res.send(`This is the list of our students\n${report.join('\n')}`);
    }).catch((err) => {
      const error = (err instanceof Error) ? err.message : err.toString();
      res.send(`This is the list of our students\n${error}`);
    });
});

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});

module.exports = app;
