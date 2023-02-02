var express = require('express');
var router = express.Router();
const { ProductosController } = require('./controller');

router
    .get('/', ProductosController.getProductos);
    .get('/:categoria', ProductosController.getProductosCategoria);

router.get('/:categoria', function (req, res, next) {
    const asd = req;
    const { params: { categoria } } = req;
    db.query("SELECT * FROM productos WHERE destacado = 1", function (err, destacados) {
        db.query("SELECT * FROM categorias", function (err, categorias) {
            db.query("SELECT * FROM productos p JOIN categorias c ON (p.id_categoria = c.id) WHERE id_categoria =" + categoria + ";", function (err, filtrados) {
                console.log(asd)
                res.render('productos', {
                    titulo: 'Lista de productos',
                    productos: filtrados,
                    destacados: destacados,
                    categorias: categorias
                });
            })
        });
    });
});
*/
module.exports = router;