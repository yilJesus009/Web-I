function calcular(){
    const msgErrorPeso = document.getElementById("msg-error-peso");
    msgErrorPeso.innerHTML="";
    const msgErrorAltura = document.getElementById("msg-error-altura");
    msgErrorAltura.innerHTML="";
    const msgErrorEdad = document.getElementById("msg-error-edad");
    msgErrorEdad.innerHTML="";
    const msgErrorGenero = document.getElementById("msg-error-genero");
    msgErrorGenero.innerHTML="";
    const msgErrorActividad = document.getElementById("msg-error-actividad");
    msgErrorActividad.innerHTML="";

    const inputPeso = document.getElementById("input__Peso");
    const inputAltura = document.getElementById("input__Altura");
    const inputEdad = document.getElementById("input__Edad");
    const inputGenero = document.getElementById("label__Sexo");
    const inputActividad = document.getElementById("input__Actividad");

    
    const peso = inputPeso.valueAsNumber;
    let hayError = false;
    if(isNaN(peso) || peso <=0){
        msgErrorPeso.innerHTML="Debe ingresar un Peso válido";
        hayError=true;
    }

    const altura = inputAltura.valueAsNumber;
    if(isNaN(altura) || altura <=0){
        msgErrorAltura.innerHTML="Debe ingresar una Altura válida";
        hayError=true;
    }

    const edad = inputEdad.valueAsNumber;
    if(isNaN(edad) || edad <=0){
        msgErrorEdad.innerHTML="Debe ingresar una Edad válida";
        hayError=true;
    }if(!Number.isInteger(edad) || edad <=0){
        msgErrorEdad.innerHTML="Debe Ingresar Edad Valida";
        hayError=true;
    }
    const genero = inputGenero.value;
    if(genero === "elegir"){
        msgErrorGenero.innerHTML="Debe seleccionar un Género";
        hayError=true;
    }
    const actividad = inputActividad.value;
    if(actividad === "seleccionar"){
        msgErrorActividad.innerHTML="Debe seleccionar un Nivel de Actividad";
        hayError=true;
    }

    if(hayError){
        return;
    }
    
}

