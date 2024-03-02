const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents (request, response) {
    readDatabase(process.argv[2])
      .then((studentsFields) => {
        const sortedKeys = Object.keys(studentsFields).sort();
        const res = ['This is the list of our students'];
        for (const key of sortedKeys) {
          res.push(`Number of students in ${field}: ${studentsFields[key].length}. List: ${studentsFields[key].join(', ')}`);
        }
        return response.status(200).send(res.join('\n'));
      }).catch((err) => {
        return response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response) {
    const { major } = request.params;
    if ((major !== 'CS') && (major !== 'SWE')) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((studentsFields) => {
        return response.status(200).send(`List: ${studentsFields[major].join(', ')}`);
      }).catch((err) => {
        return response.status(500).send('Cannot load the database');
    });
  }
}