//Variables
let btnAcademico = document.getElementById("academico");
let btnIntereses = document.getElementById("intereses");
let btnHabilidades = document.getElementById("habilidades");
let btnContacto = document.getElementById("contacto");
let caja1= document.querySelector(".caja1");
let caja2= document.querySelector(".caja2");
let caja3= document.querySelector(".caja3");
let caja4= document.querySelector(".caja4");


//Evento Click de los botones del div Contenedor "Acerca de Mi"
btnAcademico.addEventListener("click", mostrarDiv);
btnIntereses.addEventListener("click", mostrarDiv);
btnHabilidades.addEventListener("click", mostrarDiv);
btnContacto.addEventListener("click", mostrarDiv);


//Función para mostrar y ocultar las secciones del Contenedor "Acerca de Mi"
function mostrarDiv(){
    let seleccionado= this.value;
    if(seleccionado == 1)
    {
        caja1.style.display="block";
        caja2.style.display="none";
        caja3.style.display="none";
        caja4.style.display="none";

    }
    else if(seleccionado == 2)
    {
        caja1.style.display="none";
        caja2.style.display="block";
        caja3.style.display="none";
        caja4.style.display="none";
    }
    else if(seleccionado == 3)
    {
        caja1.style.display="none";
        caja2.style.display="none";
        caja3.style.display="block";
        caja4.style.display="none";
    }
    else if(seleccionado == 4)
    {
        caja1.style.display="none";
        caja2.style.display="none";
        caja3.style.display="none";
        caja4.style.display="block";
    }   
}