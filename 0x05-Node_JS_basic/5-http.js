const http = require('http');
const fs = require('fs');

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

const HOST = '127.0.0.1';
const PORT = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((report) => {
        res.end(`This is the list of our students\n${report.join('\n')}`);
      }).catch((err) => {
        const error = (err instanceof Error) ? err.message : err.toString();
        res.end(`This is the list of our students\n${error}`);
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at: http://${HOST}:${PORT}/`);
});

module.exports = app;
