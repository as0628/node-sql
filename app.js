const express = require('express');
const sequelize = require('./config/db');
const { Student, Course } = require('./models');

const app = express();
app.use(express.json());

// Sync DB and create tables
sequelize.sync({ force: true }).then(async () => {
  console.log('Database synced.');

  // Sample data
  const student1 = await Student.create({ name: 'Anshu Singh' });
  const student2 = await Student.create({ name: 'Aditi Verma' });

  const course1 = await Course.create({ title: 'Node.js Bootcamp' });
  const course2 = await Course.create({ title: 'React.js Basics' });

  // Add associations
  await student1.addCourse(course1);
  await student1.addCourse(course2);
  await student2.addCourse(course1);

  console.log('Sample data inserted.');
});

// Routes
app.get('/students', async (req, res) => {
  const students = await Student.findAll({ include: Course });
  res.json(students);
});

app.get('/courses', async (req, res) => {
  const courses = await Course.findAll({ include: Student });
  res.json(courses);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
