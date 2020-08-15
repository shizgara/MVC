/*Підключили молель(MODEL) courses */
const courses = require("../Model/course");
/*Підключили data */
const data = require("../helper/data");

// Створюємо метод getHome,який рендерить сторінку index і передає дані з обєкта data
exports.getHome = (req, res, next) => {
  res.render("index", data);
};

// Створюємо метод getAbout,який рендерить сторінку index і передає дані з обєкта data
exports.getAbout = (req, res, next) => {
  res.render("about", data);
};

// Створюємо метод getContact,який рендерить сторінку index і передає дані з обєкта data
exports.getContact = (req, res, next) => {
  res.render("contact", data);
};

// Створюємо метод getCourse,який рендерить сторінку index і передає дані з обєкта data
exports.getCourse = (req, res, next) => {
  /*Тут ми звертаємося до нашої моделі і повертаємо запит в БД у вигляді масива. rows - поля,fieldData - дані з полів */
  courses.fetchAllCourses()
    .then(([rows, fieldData]) => {
        res.render("course",{
          /* Другим параметром в цьому методі передаємо обєкт, з ключем data та ключем courses в який записуються 
          отримані дані з масива rows*/
            data:data,
            courses:rows,
        })
      console.log(rows);
    })
    .catch((err) => console.log(err));
  // res.render("course", data);
};
