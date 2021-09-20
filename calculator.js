//Extraer el elemento dom de la entrada y el tratamiento.
var input_content = document.getElementById("operation").value;

//Declaracion de funciones en ambas secciones (calculadora científica y operaciones básicas)
function pulsada (tecla) {    
    switch(tecla) {
        case 'C':
            document.getElementById("operation").value = ' ';
            break;
    
        case '=':
            var resultado = eval(document.getElementById("operation").value);
            document.getElementById("operation").value = resultado;
            break;
            
        default:
            document.getElementById("operation").value = document.getElementById("operation").value + tecla;
    }
    
}

function erase_num(){
    //Funcion Borrar un caracter
    var last = document.getElementById("operation").value;
    var new_val = last.substring(0, last.length-1);

    document.getElementById("operation").value = new_val;
}

function sin(n1){
    //Funcion del seno de un numero
    r = Math.sin(n1);
    return r;
}

function cos(n1){
    //Funcion del coseno de un numero
    r = Math.cos(n1);
    return r;
}

function tan(n1){
    //Funcion del tangente de un numero
    r = Math.tan(n1);
    return r;
}

function log(n1){
    //Funcion de Logarritmo de un numero
    r = Math.log(n1);
    return r;
}

function pow(n1, n2){
    //Funcion de Potencia
    r = Math.pow(n1, n2);
    return r;
}

function raiz(n1){
    //Funcion de raiz cuadrada
    r = Math.sqrt(n1);
    return r;
}

function prc(n1, n2){
    //Funcion de Potencia
    r = ((n1/100)*n2);
    return r;
}
