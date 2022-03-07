//Aquí haremos uso de los diferentes métodos con los diferentes operadores

//Primero vamos a crear una colección para sólo el producto
db.OfertasAmazon.aggregate([
    {
        $project:{
            _id: 0,
            id: 1,
            nombre: "$producto.nombre",
            precio: "$producto.precio",
            finOferta: "$producto.finOferta",
            configuracion: "$producto.configuración",
            descuento: "$producto.descuento",
            articuloscomprados: "$producto.ArticulosComprados"
        }
    },
    {
        $out: {
            db: "SergioProyectoFinal2",
            coll: "productos"
        }
    }
])



//A continuación creamos otra colección para los datos del comprador
db.OfertasAmazon.aggregate([
    {
        $project:{
            _id: 0,
            id: 1,
            nombre: "$comprador.nombre" ,
            NumeroCompra: "$comprador.NumeroCompra"
        }
    },
    {
        $out: {
            db: "SergioProyectoFinal2" ,
            coll: "Comprador"
        }
    }

])


// Queremos saber el dinero que se ha gastado un comprador
db.OfertasAmazon.aggregate([
    {
        $unwind: {
            path: "$producto" ,
        },
    },
    {
        $group: {
            _id: "$comprador",
            DineroGastado: {
                $sum: ["$producto.precio"]
            }
        }
    }
])


//Queremos saber el número de compras que ha realizado un comprador
db.OfertasAmazon.aggregate([
    {
        $group : {
            _id: "$comprador" ,
            NumeroCompras : {
                $count: {},
            }
        }
    },
    {
        $sort: {
            NumeroCompras:+1
        }
    }
])


//Queremos saber una media del dinero que se ha gastado entre todos los compradores
db.OfertasAmazon.aggregate([
    {
        $unwind: {
            path:"$producto"
        },
    },
    {
        $group: {
            _id: "$comprador",
            MediaDinero: {
                $avg: {
                    $multiply: ["producto.precio" , "producto.ArticulosComprados"]
                },
            },
        },
    },
])



//Queremos obtener la configuración de un producto cuyo precio sea máximo
db.OfertasAmazon.aggregate([
    {
        $unwind: {
            path: "$producto"
        },
    },
    {
        $project: {
            _id: 0 ,
            nombre: "$producto.nombre",
            ProductoMax: { $max: "$producto.PrecioConfiguraciones"}                
            }
            
        } 
])



//Queremos ver el nombre del comprador con el nombre del artículo comprado
db.productos.aggregate([
    {
        $lookup: {
            from: "ventas" , 
            localField: "nombre" ,
            foreignField: "nombre" , 
            as: "nombrecompra"
        }
    },
    {
         $unwind: {
             path: "nombrecompra"
         }
        },
         {
             $project: {
                 _id: 0,
                 id: 1,
                 comprador: 1,
                 nombre: 1,
             }
         }
    
])