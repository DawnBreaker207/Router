import express from 'express';
import { Application } from 'express';
import { getAllCourses, getCourseByUrl } from './get-courses.route';
import { searchLessons } from './search-lessons.route';
import { saveCourse } from './save-course.route';
import { loginUser } from './login.route';
import { findLessonDetail } from './get-lesson-detail.route';
import cors from 'cors';
const app: Application = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseByUrl);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/login').post(loginUser);

app.route('/api/lesson-details').get(findLessonDetail);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
