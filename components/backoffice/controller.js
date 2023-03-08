const express = require('express');
const Db = require('../../db/db');

const dashboard = (req, res, next) => {
    try {
        Db.query("SELECT * FROM productos", (err, productos) => {
            if (err) {
                console.log(err)
            } else {
                res.render('backoffice/backoffice', { titulo: 'Backoffice', productos: productos });
            }
        })
    } catch (err) {
        console.log(err)
    }
}

const showProductos = (req, res, next) => {
    try {
        Db.query("SELECT * FROM productos", function (err, resultados) {
            if (err) {
                console.log(err)
            } else {
                res.render('backoffice/productos', { titulo: 'Productos', productos: resultados });
            }
        });
    } catch (err) {
        console.log(err)
    }
}

const toggleDestacado = (req, res, next) => {
    var { params } = req;
    try {
        Db.query("SELECT destacado FROM productos WHERE id =" + params.id, function (err, result) {
            var destacado = result[0].destacado;
            (destacado == 0) ? destacado++ : destacado--;
            try {
                Db.query("UPDATE productos SET destacado = " + destacado + " WHERE id=" + params.id, function (err) {
                    try {
                        Db.query("SELECT * FROM productos", function (err, resultados) {
                            if (err) {
                                console.log(err);
                            } else {
                                res.render('backoffice/productos', { titulo: 'Productos', productos: resultados });
                            }
                        });
                    } catch (err) {
                        console.log(err);
                    }
                })
            } catch (err) {
                console.log(err);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const showProducto = (req, res, next) => {
    var { params } = req;
    try {
        Db.query("SELECT * FROM productos WHERE id =" + params.id, function (err, producto) {
            Db.query("SELECT id, nombre FROM categorias ORDER BY id ASC", function (err, categorias) {
                res.render('backoffice/producto', {
                    titulo: 'Producto',
                    producto: producto[0],
                    categorias: categorias
                });
            });
        });
    } catch (err) {
        console.log(err);
    }
}

const updateProducto = (req, res, next) => {
    var { body } = req;
    try {
        let query = "UPDATE productos SET titulo ='"+body.titulo+"' WHERE id="+body.id;
        Db.query(query, function (err, resp) {
            if (err) {
                console.log(err)
            } else {
                try {
                    let sql = "UPDATE productos SET descripcion ='"+body.descripcion+"' WHERE id="+body.id;
                    Db.query(sql, function (err, resp) {
                        if (err) {
                            console.log(err)
                        } else {
                            try {
                                let sql = "UPDATE productos SET precio ="+Number(body.precio)+" WHERE id="+body.id;
                                Db.query(sql, function (err, resp) {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        try {
                                            let sql = "UPDATE productos SET destacado ="+Number(body.destacado)+" WHERE id="+body.id;
                                            Db.query(sql, function (err, resp) {
                                                if (err) {
                                                    console.log(err)
                                                } else {
                                                    console.log("CATEGORIA: "+body.categoria);
                                                    let sql = "UPDATE productos SET id_categoria ="+Number(body.categoria)+" WHERE id="+body.id;
                                                    Db.query(sql, function (err, resp) {
                                                        try {
                                                            let sql = "SELECT * FROM productos WHERE id =" + body.id;
                                                            Db.query(sql, function (err, producto) {
                                                                let sql = "SELECT id, nombre FROM categorias ORDER BY id ASC"
                                                                Db.query(sql, function (err, categorias) {
                                                                    res.render('backoffice/producto', {
                                                                        titulo: 'Producto',
                                                                        producto: producto[0],
                                                                        categorias: categorias
                                                                    });
                                                                });
                                                            });
                                                        } catch (err) {
                                                            console.log(err);
                                                        }
                                                    });
                                                }
                                            });
                                        } catch (err) {
                                            console.log(err)
                                        }
                                    }
                                });
                            } catch (err) {
                                console.log(err)
                            }
                        }
                    });
                } catch (err) {
                    console.log(err)
                }
            }
        });
    } catch (err) {
        console.log(err)
    }
}

module.exports.BackofficeController = {
    dashboard,
    showProductos,
    toggleDestacado,
    showProducto,
    updateProducto
}