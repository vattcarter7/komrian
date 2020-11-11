### how to migrate 

Run this command in the terminal to migrate database schemas and tables
> DATABASE_URL=postgres://vattsopheak:@localhost:5432/komrian npm run migrate up

postgresql://dbuser:secretpassword@database.server.com:3211/mydb



example sql commands
> select * from lesson where section_id = ANY(select section.id from course inner join section on course.id = section.course_id where course.id = 4);
> select lesson.name as lesson_name, lesson.section_id, section.name as section_name from lesson inner join section on section.id=lesson.section_id  where section_id = ANY(select section.id from course inner join section on course.id = section.course_id where course.id = 4);
> select lesson.name as lesson_name, section.section_order, lesson.lesson_order, lesson.section_id, section.name as section_name from lesson inner join section on section.id=lesson.section_id  where section_id = ANY(select section.id from course inner join section on course.id = section.course_id where course.id = 4) order by section.section_order, lesson.lesson_order;