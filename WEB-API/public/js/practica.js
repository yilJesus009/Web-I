// function multiplicar(a,b){
//     let resultado=0;
//         for(let i=0; i<b; i++){
//             resultado += a;
//         }
//     console.log(a);
//     console.log(b);
//     return resultado;
// }
// // 4800 hora y veinte minutos
// function horas(tiemp=0){
//     let horas=Math.floor((tiemp/60)/60);
//     let minutos=Math.floor(tiemp/60)%60;
//     let segundos=(tiemp%60);

//     console.log(horas);
//     console.log(minutos);
//     console.log(segundos);
//     return (horas+" horas "+minutos+" minutos "+segundos+" segundos");
// }

// let texto="Hola mundo";

// console.log(texto.length);
// console.log(texto.charAt(3));
// console.log(texto.includes("mundooo"));
// console.log(texto.indexOf("mundo"));
// console.log(texto.substring(0,6));
// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());
// console.log(texto.replace("Hola", "mamada"));
// console.log(texto.startsWith("hola"));
// console.log(texto.endsWith("mundo"));
// console.log(texto.split(" "));

// var myArray= new Array();
// myArray[0]="juan";
// myArray[1]=23;
// myArray[2]=true;

// var myArray=new Array("juan",23,true);
// var myArray=["juan",23,true];
// =====================================================================================================================================

// let elementos =[1,2,3,4,5];
// console.log(elementos.length);

// let array=[1,2,3];
// array.push(6);
// console.log(array);

// let array =[1,2,3,4];
// let ultimo = array.pop();
// console.log(array);
// console.log(ultimo);

// let array =[1,2,3,4];
// let primero = array.shift();
// console.log(array);
// console.log(primero);

// let array = [1,2,3,4];
// array.splice(0,2,"a","b");
// console.log(array);

// let array =[1,2,3,4];
// let nuevoArray = array.map((elemento)=>{
//     return elemento * 2;
// });
// console.groupCollapsed(nuevoArray);

// let array=[1,2,3,4,5];
// let nuevoArray = array.filter((elemento)=>{
//     return elemento >2;
// });
// console.log(nuevoArray);

// let array=[1,2,3,4,5];
// let encontrado = array.find((elemento)=>{
//     return elemento >5;
// })
// console.log(encontrado);

// ========================================================================================================================================

// var d=new Date();
// var d = new Date (millisecods);
// var d = new Date(dateString);
// var d = new Date(year, month,day,hours,minutes,seconds,millisecods);

//  let numero = parseInt('100', 10);
//  console.log(numero);

//  let numero2 = parseFloat('3.14');
//  console.log(numero2);

//  console.log(isNaN('hola'));
//  console.log(isNaN(123));

// ==========================================================================================================================================

// function Persona(nombre,apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;

//     this.saludar = function(otraPersona){
//         var msg = "hola "+ otraPersona +". mi nombre es "+this.nombre+" "+this.apellido;
//         alert(msg);
//     }

// }
// var obj = new Persona('jesus gil','pantoja');
// obj.saludar('pedro');

// var objPersona = new Persona('jesus gil','pantoja');
// var msg = 'Persona: '+objPersona.nombre+' '+objPersona.apellido;
// alert(msg);
// console.log(msg);

// ============================================================================================================================================

// var obj = {
//     nombre: "jesus",
//     apellido: "pantoja",
// }

// var nombres=["Pamela Aguilera","Jesus Gil","Maria Galindo"]

// var obj = {
//     nombre: "jesus",
//     apellido: "pantoja",
//     saludar : function(nombre){
//         var msg = "hola"+otrapersona+". Mi nombre es "+this.nombre+" "+this.apellido;
//         alert(msg);
//     }
// };
// obj.saludar("Pamela");
// ============================================================================================================================================

// const personas =[
//     {
//         nombre: "Juan Perez",
//         edad: 18,
//         email: "juan.perez@example.com"
//     },
//     {
//         nombre: "Maria Loza",
//         edad: 21,
//         email: "maria.loza@example.com"
//     }
// ];

const storage = window.localStorage;
let personas =[];
let storedPeople = storage.getItem("personas");

if(storedPeople){
    personas=JSON.parse(storedPeople);
}else{
    storage.setItem("personas", JSON.stringify(personas));
}
actualizarLista();

async function agregarPersona(){
    const msgErrorNombre= document.getElementById("msg-error-nombre");
    msgErrorNombre.innerHTML="";
    const msgErrorEdad= document.getElementById("msg-error-edad");
    msgErrorEdad.innerHTML="";
    const msgErrorEmail= document.getElementById("msg-error-email");
    msgErrorEmail.innerHTML="";

    const inputNombre=document.getElementById("input-nombre");
    const inputEdad=document.getElementById("input-edad");
    const inputEmail=document.getElementById("input-email");

    // validacion de nombre
    const nombre=inputNombre.value.trim();
    let hayError = false;
    if(nombre===""){
        msgErrorNombre.innerHTML="Debe ingresar el Nombre";
        hayError=true;

    }
    // validacion de edad
    const edad = inputEdad.valueAsNumber;
    if (isNaN(edad) || edad <0){
        msgErrorEdad.innerHTML="Debe ingresar una Edad válida";
        hayError=true;
    }if(!Number.isInteger(edad) || edad <0){
        msgErrorEdad.innerHTML="Debe Ingresar Edad Valida";
        hayError=true;
    }
   
    // validacion de email
    const email = inputEmail.value.trim();
    if(email===""){
        msgErrorEmail.innerHTML="Debe ingresar un Email";
        hayError=true;
    }else if(!esEmailValido(email)){
        msgErrorEmail.innerHTML="Debe ingresar un Email válido";
        hayError=true;
    }

    const nuevaPersona={
        nombre: nombre,
        edad: edad,
        email: email
    };

     if(hayError){
        return;
    }

    await insertarPersona(nuevaPersona);
    // personas.push(nuevaPersona)
    // storage.setItem("personas",JSON.stringify(personas));
    inputNombre.value="";
    inputEdad.value="";
    inputEmail.value="";
    await actualizarLista();
}

function esEmailValido(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

async function eliminar(i){
    const respuesta=confirm("Esta seguro de elminar a la persona seleccionada?");
    if(respuesta ===false){
        return;
    }
    await eliminarPersona(i);
    await actualizarLista();
}

async function actualizarLista(){
    const personas = await getPersonas();
    const listaNombres =document.getElementById("lista-nombres");

    if(personas.length === 0){
        listaNombres.innerHTML = `
        <tr>
            <td colspan="4">No hay personas registradas</td>
        </tr>`;
        return;
    }
    let html="";
    for(let i in personas){
        const persona = personas[i];
        html += `
        <tr>
            <td>
                <input class="btn-delete" type="button" value="Eliminar" onclick="eliminar(${i})">
            </td>
            <td>${persona.nombre}</td>
            <td>${persona.edad}</td>
            <td>${persona.email}</td>
        </tr>`;
    }

    listaNombres.innerHTML=html;
}