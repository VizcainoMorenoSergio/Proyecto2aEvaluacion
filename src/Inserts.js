db.OfertasAmazon.drop();
db.OfertasAmazon.insertMany([
    {
        id: 01,
        productos: [
            {
                nombre: "Blink Cámara" ,
                precio: "30" ,
                finOferta: "3" , //Días//
                descuento: "20%" ,
                configuración: ["1Cámara" , "2Cámaras"],
                AlexaCompatibilidad: true ,
                Stock: true, 
                ArticulosComprados: "1"               
            }
        ],
        FechaCompra: new Date("2022-03-01"),
        comprador: {
            nombre: "Pepe",
            NumeroCompra: "40"
        }
    },
    {
        id: 02,
        producto: [
            {
                nombre: "OnePlus Buds Z2, Auriculares" ,
                precio: "70" ,
                finOferta: "6" , //Días//
                descuento: "30%" ,
                configuración: ["Blanco" , "Negro"],
                AlexaCompatibilidad: false ,
                Stock: "22" , 
                ArticulosComprados: "2"               
            },
            {
                nombre: "Acer Aspire 5, Ordenador portátil" ,
                precio: "570" ,
                finOferta: "6" ,
                descuento: "12%" ,
                configuración: [ "8GB RAM 256GB SSD" , "8GB RAM 512GB SSD" , "16GB RAM 512GB SSD" ],
                AlexaCompatibilidad: false ,
                stock: "14" ,
                PrecioConfiguraciones: ["500","570"]
            }
        ],
        FechaCompra: new Date("2022-02-24"),
        comprador: {
            nombre: "Carlos",
            NumeroCompra: "50"
        }
    },
    {
        id: 03,
        producto: [
            {
                nombre: "Echo Dot, Altavoz inteligente Alexa" ,
                precio: "30" ,
                descuento: "40%" ,
                configuración: ["Sólo dispositivo" , "Con bombilla Hue White"],
                AlexaCompatibilidad: true ,  
                ArticulosComprados: "1"             
            }
        ],
        FechaCompra: new Date("2022-01-20"),
        comprador: {
            nombre: "Pepe",
            NumeroCompra: "170"
        }
    },
    {
        id: 04,
        producto: [
            {
                nombre: "Philips l'Or Barista Sublime, Cafetera" ,
                precio: "55" ,
                descuento: "45%" ,
                configuración: ["Cafetera sola" , "Cafetera + cápsulas"],
                AlexaCompatibilidad: false ,
                Stock: "1" ,     
                ArticulosComprados: "1"           
            }
        ],
        FechaCompra: new Date("2022-03-06"),
        comprador: {
            nombre: "Julia",
            NumeroCompra: "680"
        } 
    },
        {
            id: 05 ,
            producto: [
                {
                    nombre: "8S Auriculares Inalámbricos" ,
                    precio: "21" ,
                    descuento: "46%" ,
                    configuración: ["Azul" , "Negros" , "Rosas"],
                    AlexaCompatibilidad: false ,
                    Stock: "4" ,  
                    ArticulosComprados: "2"              
                }
            ],
            FechaCompra: new Date("2022-03-06"),
            comprador: {
                nombre: "Carlos",
                NumeroCompra: "1010"
            },
        },
        {
            id: 06 ,
            producto: [
                {
                    nombre: "Mesa Extensible" ,
                    precio: "155" ,
                    descuento: "20%" ,
                    configuración: ["127-165 x 57 x 71,5 cm" , "127-180 x 77 x 71,5" , "127-180 x 90 x 71.5 cm"],
                    AlexaCompatibilidad: false ,     
                    ArticulosComprados: "1"         
                }
            ],
            FechaCompra: new Date("2022-01-02"),
            comprador: {
                nombre: "Juana",
                NumeroCompra: "3"
            }
        },
])