const express = require('express');
const Db = require('../../db/db');

const getProductos = (req, res) => {
    try {
        Db.query('SELECT * FROM productos', (err, productos) => {
            if (err) {
                console.log(err)
            } else {
                Db.query('SELECT * FROM productos WHERE destacado = 1', (err, destacados) => {
                    Db.query('SELECT * FROM categorias', (err, categorias) => {
                        res.render('productos', {
                            titulo: 'productos',
                            productos: productos,
                            destacados: destacados,
                            categorias: categorias
                        });
                    })
                })

            }
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports.ProductosController = {
    getProductos,
}