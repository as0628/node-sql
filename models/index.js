const Student = require('./student');
const Course = require('./course');

// M:N Association
Student.belongsToMany(Course, { through: 'StudentCourses' });
Course.belongsToMany(Student, { through: 'StudentCourses' });

module.exports = {
  Student,
  Course
};
