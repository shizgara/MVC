/*Ініціалізації фреймворка express i плагіна body-parser(розпарсує дані з метода .post())  */
const express = require("express");
const bodyParser = require("body-parser");

/*Ініціалізація порта і обєкта(сервера) app */
const PORT = 8000;
const app = express();

// Ініціалізація БД
const db = require("./helper/database");

/*Ініціалізація маршрутів(routes) */
// const aboutRoute = require("./routes/about");
// const homeRoute = require("./routes/home");
// const contactRoute = require("./routes/contact");
// const courseRoute = require('./routes/course')

// Ініціалізація метода path
const path = require("path");


// Controller

const errorController = require("./Controllers/errorController");

// Middleware

/*Підключення шаблонізатора */
app.set("view engine", "ejs");
app.set("views","views");

// Підключення папки static де зберігаються шрифти,css і т.п.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));


// Routes middleware
// app.use(homeRoute);
// app.use(contactRoute);
// app.use(aboutRoute);
// app.use(courseRoute);

// ініціалізація роута learnRoutes і запуск його як middleware
const learnRoutes = require("./routes/learn");
app.use(learnRoutes);

/*Middleware for 404 Page not found */
app.use(errorController.get404);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));