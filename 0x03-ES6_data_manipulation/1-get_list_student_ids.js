export default function getListStudentIds(students) {
  return Array.isArray(students) ? students.map((student) => student.id) : [];
}
