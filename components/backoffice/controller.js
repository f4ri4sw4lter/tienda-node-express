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

const panelProductos = (req, res, next) => {
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
    try{
        Db.query("SELECT destacado FROM productos WHERE id ="+params.id, function (err,result){
            var destacado  = result[0].destacado;
            (destacado==0) ? destacado++ : destacado--;
            try{
                Db.query("UPDATE productos SET destacado = "+destacado+" WHERE id="+params.id, function(err){
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
            }catch(err){
                console.log(err);
            }
        })
    } catch (err){
        console.log(err);
    }
}

const panelProducto = (req, res, next) => {
    var { params } = req;
    try{
        Db.query("SELECT * FROM productos WHERE id ="+params.id, function (err,producto){
            console.log(producto);
            res.render('backoffice/producto', { titulo: 'Producto', producto: producto[0] });
        })
    } catch (err){

    }
}

module.exports.BackofficeController = {
    dashboard,
    panelProductos,
    toggleDestacado,
    panelProducto
}