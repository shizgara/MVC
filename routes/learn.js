// підключили метод express і express.router()
const express = require("express");
const router = express.Router();

/* створили знімму в яку передаються дані(методи) з файла learnController і описує шлях
до learnController*/
const learnController = require("../Controllers/learnController")

// Роути які віддають методи при зверненні на той чи інший роутер
router.get("/",learnController.getHome);
router.get("/about",learnController.getAbout);
router.get("/course",learnController.getCourse);
router.get("/contact",learnController.getContact);


module.exports = router;

