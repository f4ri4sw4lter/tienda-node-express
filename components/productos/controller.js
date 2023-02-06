const express = require('express');
const Db = require('../../db/db');

const getProductos = (req, res, next) => {
    const { params: {orden} } = req;
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

const getProductosCategoria = (req, res, next) => {
    try{
        const { params: { categoria } } = req;
        Db.query("SELECT * FROM productos WHERE destacado = 1", function (err, destacados) {
            Db.query("SELECT * FROM categorias", function (err, categorias) {
                Db.query("SELECT * FROM productos p JOIN categorias c ON (p.id_categoria = c.id) WHERE id_categoria =" + categoria + ";", function (err, filtrados) {
                    res.render('productos', {
                        titulo: 'Lista de productos',
                        productos: filtrados,
                        destacados: destacados,
                        categorias: categorias
                    });
                })
            });
        });
    }catch(err){
        console.log(err)
    }
}

module.exports.ProductosController = {
    getProductos,
    getProductosCategoria,
}