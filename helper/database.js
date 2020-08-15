// Підключили драйвер mysql2
const mysql = require("mysql2")

// створюємо піключення до БД за методом pool
const pool= mysql.createPool({
    // адрес розміщення бд
    host: "localhost",
    // Назва бази даних
    database: "e-learn",
    // імя користувача для підключення
    user: "root",
        // Пароль для підключеняя до БД
    password: "",

});
// Експортуємо pool у вигляді проміса
module.exports = pool.promise();