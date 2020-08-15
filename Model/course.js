/*Підключення до database */
const db = require('../helper/database');


/*Експортуємо(також створюємо) класс(ніби свій окремий тип даних) Course
Тут буде відбуватися звернення до БД */
module.exports = class Course{

/*Створення статично метода fetchAllCourses(це назва метода) */
static fetchAllCourses(){
    /*Підключення до бази db і застосування до нього метода execute(виконати) */
    return db.execute("SELECT * FROM course");
}
};