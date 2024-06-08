import {Course, sortCoursesBySeqNo} from '../model/course';
import {COURSES} from '../../../server/db-data';


export function setupCourses() : Course[] {
  const courses = Object.values(COURSES) as Course[];
  return courses.sort(sortCoursesBySeqNo);
}