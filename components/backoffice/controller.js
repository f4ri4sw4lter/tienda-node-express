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

module.exports.BackofficeController = {
    dashboard,
    panelProductos,
}