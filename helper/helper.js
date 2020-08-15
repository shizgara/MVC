/* Підключили модуль path(використовується для вказання шляхів до файлів) */
const path = require('path');
/*Еспортуємо з хелпера визначення(шлях) до кореневої папки */
module.exports = path.dirname(process.mainModule.filename);