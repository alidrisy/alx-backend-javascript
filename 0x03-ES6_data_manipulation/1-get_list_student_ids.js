export default function getListStudentIds(list) {
  return Array.isArray(list) ? list.map((student) => student.id) : [];
}
