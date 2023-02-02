

const getProductos = () =>{
    try{
        conn.query('SELECT * FROM productos', function(err, result){
            if(err){
                console.log('ERROR EN QUERY')
            }else{
                return result;
            }
        });
    }catch(err){
        console.log(err)
    }
};

module.exports.ProductosServices = {
    getProductos,
};