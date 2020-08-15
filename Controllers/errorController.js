/* Створюємо і експортуємо метод get404,який віддає статус сторінки 404
 і рендерить сторінку 404.ejs, а також створюємо змінну data і вказуємо до неї шлях*/
const data = require('../helper/data')

exports.get404 = (req,res,next)=>{
    res.status(404).render("404",data);
}