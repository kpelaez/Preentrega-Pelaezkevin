/*============VARIABLES GLOBALES=========================*/

/*Precios --> Podrian ser const*/
let precioCervezaRuRo = 750;
let precioCervezaNegra = 900;
let precioVinoBlanco = 1700;
let precioVinoTinto = 1400;
let precioFernet = 2400;
let precioRon = 3200;
let precioVodka = 2500;
let precioAgua = 700;
let precioGaseosa = 800;

/*Centinelas para corte de control*/
let opcion=-1;
let subeleccion=-1;

/*Contadores de Cantidades por tipo de bebida*/
let cervezaRubia = 0, cervezaNegra = 0, cervezaRoja = 0, vinoBlanco = 0, vinoTinto = 0,fernet = 0, ron = 0, vodka = 0, agua = 0, gaseosa = 0;
let cant=0;

/*Sumadores de Precios por categorias*/
let importeTotal = 0;
let subTotalCervezas = 0, subTotalVinos= 0, subTotalFernet = 0, subTotalRon = 0, subTotalVodka = 0, subTotalBebidas = 0;


/*=============FIN VARIABLES GLOBALES==================*/

/*=============FUNCIONES===============================*/
function calcularValor(cant,precio){

    return cant*precio;
}

function emitirMensaje(str){

    if(str === "SI" || str === "Si" || str==="sI" ){
        alert("¡¡Muchas gracias!!\nTu pedido sera preparado para entregar cuando se confirme el pago")
        return true;
    }else{
        if(str === "NO" || str === "No" || str==="nO" ){
            alert("¡¡Que lastima!!\nLamentamos que no te haya gustado nuestro presupuesto. Esperamos verte pronto!")
            return true;
        }else{
            alert("No se comprende la respuesta.");
            return false;
        }
    }   
}

function presupuestarBebidas(){
    
    /*Muestro el menu inicial*/

    do{
        opcion = parseInt(prompt("1-Cervezas\n2-Vinos\n3-Fernet\n4-Ron\n5-Vodka\n6-Bebidas no alcoholicas\n0-Para terminar\n"));

        switch (opcion){
            case 0:
                alert("Presupuesto Finalizado")
                break; 

            case 1:
                subeleccion = parseInt(prompt("CERVEZAS\n1-Cerveza Rubia\n2-Cerveza Negra\n3-Cerverza Roja\n0-Para volver"));
                
                /*Vuelve*/
                if(subeleccion == 0){
                    break;
                }
                /*Cervezas*/
                if(subeleccion == 1){
                    cant = parseInt(prompt("La presentacion es por botella de 750ml y precio $"+precioCervezaRuRo+"\nIngrese cantidad: "));
                    cervezaRubia += cant;
                    subTotalCervezas += calcularValor(cant,precioCervezaRuRo);
                }
                if(subeleccion == 2){
                    cant = parseInt(prompt("La presentacion es por botella de 750ml y precio $"+precioCervezaNegra+"\nIngrese cantidad: "));
                    cervezaNegra += cant;
                    subTotalCervezas = calcularValor(cant,precioCervezaNegra);
                }
                if(subeleccion == 3){
                    cant = parseInt(prompt("La presentacion es por botella de 750ml y precio $"+precioCervezaRuRo+"\nIngrese cantidad: "));
                    cervezaRoja += cant;
                    subTotalCervezas += calcularValor(cant,precioCervezaRuRo);
                }

                break;

            case 2:
                subeleccion = parseInt(prompt("VINOS\n1-Vino Blanco\n2-Vino Tinto\n0-Para volver"));
                /*Vuelve*/
                if(subeleccion == 0){
                    break;
                }
                /*Vinos*/
                if(subeleccion == 1){
                    cant = parseInt(prompt("La presentacion es por botella de 700ml y precio $"+precioVinoBlanco+"\nIngrese cantidad: "));
                    vinoBlanco += cant;
                    subTotalVinos += calcularValor(cant, precioVinoBlanco);
                }
                
                if(subeleccion == 2){
                    cant = parseInt(prompt("La presentacion es por botella de 700ml y precio $"+precioVinoTinto+"\nIngrese cantidad: "));
                    vinoTinto += cant;
                    subTotalVinos += calcularValor(cant, precioVinoTinto);
                }

                break;
            
            case 3:
                cant = parseInt(prompt("FERNET - presentacion de 1 lt, precio $"+precioFernet+"\n Ingrese cantidad: "));
                fernet+=cant;
                subTotalFernet += calcularValor(cant, precioFernet);

                break;
            
            case 4:
                cant = parseInt(prompt("RON - presentacion de 1 lt, precio $"+precioRon+"Ingrese cantidad: "));
                ron+=cant;
                subTotalRon += calcularValor(cant, precioRon);

                break;
        
            case 5:
                cant = parseInt(prompt("VODKA - presentacion de 1 lt, precio $"+precioVodka+"\n Ingrese cantidad: "));
                vodka+=cant;
                subTotalVodka += calcularValor(cant, precioVodka);
                
                break;                
        
            case 6:
                subeleccion = parseInt(prompt("BEBIDAS NO ALCOHOLICAS\n1-Gaseosas\n2-Agua\n0-Para volver"));
                
                /*Volver*/
                if(subeleccion==0){
                    break;
                }
                /*BEBIDAS*/
                if(subeleccion==1){
                    cant = parseInt(prompt("La presentacion es por botella de 1,5 litro y precio $"+precioGaseosa+"\nIngrese cantidad: "));
                    gaseosa=+cant;
                    subTotalBebidas+=calcularValor(cant,precioGaseosa);
                }
                if(subeleccion==2){
                    cant = parseInt(prompt("La presentacion es por botella de 2 litros y precio $"+precioAgua+"\nIngrese cantidad: "));
                    agua+=cant;
                    subTotalBebidas+=calcularValor(cant,precioAgua);
                }
                
                break;

            default: 
                opcion=-1;

        }

    }while (opcion!=0);

    importeTotal = subTotalBebidas+subTotalCervezas+subTotalFernet+subTotalRon+subTotalVinos+subTotalVodka;

    let texto = "PRESUPUESTO FINAL\n\n\tDescripcion\tCantidad\tImporte\n"+
    "1) Cervezas\t"+(cervezaNegra+cervezaRoja+cervezaRubia)+"\t$"+subTotalCervezas+"\n"+
    "2) Vinos   \t"+(vinoBlanco+vinoTinto)+"\t$"+subTotalVinos+"\n"+
    "3) Fernet  \t"+fernet+"\t$"+subTotalFernet+"\n"+
    "4) Ron\t\t"+ron+"\t$"+subTotalRon+"\n"+
    "5) Vodka   \t"+vodka+"\t$"+subTotalVodka+"\n"+
    "6) No Alcohol  "+(gaseosa+agua)+"\t$"+subTotalBebidas+"\n\n"+
    "\t\t\tIMPORTE TOTAL: $"+importeTotal+
    "\n\n ¿Decide aceptar el Presupuesto? SI o NO: ";

    respuesta = prompt(texto);

    while(!emitirMensaje(respuesta)){

        respuesta = prompt("¿Decide aceptar el Presupuesto? SI o NO: ");
    }


    

}
/*=====================FIN DE FUNCIONES================*/

/*===============INICIA EL PROGRAMA PRINCIPAL=======================*/

alert("BIENVENIDO")

alert("Vamos a generar un presupuesto de bebidas para su fiesta")


presupuestarBebidas();

