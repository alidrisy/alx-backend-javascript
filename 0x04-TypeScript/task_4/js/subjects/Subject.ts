/// <reference path="./Teacher.ts" />

namespace Subjects {
  class Subject {
    teacher: Teacher;
    
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
