db.amazon.drop();
db.amazon.insertMany([
    {
        id: 01,
        producto: [
            {
                nombre: "Blink Cámara" ,
                precio: "30" ,
                finOferta: "3" , //Días//
                descuento: "7%" ,
                configuración: ["1Cámara" , "2Cámaras"],
                AlexaCompatibilidad: true ,
                




            }
        ]
    }
])