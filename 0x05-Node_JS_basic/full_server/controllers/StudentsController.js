const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentsFields) => {
        const sortedKeys = Object.keys(studentsFields).sort();
        const res = ['This is the list of our students'];
        for (const key of sortedKeys) {
          res.push(`Number of students in ${key}: ${studentsFields[key].length}. List: ${studentsFields[key].join(', ')}`);
        }
        response.status(200).send(res.join('\n'));
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if ((major !== 'CS') && (major !== 'SWE')) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((studentsFields) => {
        response.status(200).send(`List: ${studentsFields[major].join(', ')}`);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
