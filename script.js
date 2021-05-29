window.addEventListener("resize",anchoPagina());
//Permite refrescar la página cuando se cambia el tamaño
window.addEventListener('resize', (event)=>{location.reload();});

//permite verificar el tamaño de una ventana y ajusta el contenido dependiendo del tamaño
function anchoPagina(){
    if(window.innerWidth>850){
        document.getElementById('inicioSesion').style.display="block";
        document.getElementById('registro').style.display="none";
    } else{
        document.getElementById('uno').style.display="none";
        document.getElementById('inicioSesion').style.display="block";
        document.getElementById("caja__contenedora").style.bottom="100px";
    }
}



//Seleccionar el boton de registro
const boton_registro=document.getElementById('button-register');
boton_registro.addEventListener("click",(event)=>{

    if (window.innerWidth > 850){
        //Agregar display block al elemento con id registro
        const contenedor_registro=document.getElementById('registro');
        contenedor_registro.style.display="block";

        //Mover el contenedor del registro hacia a derecha
        const contenedor_box=document.getElementById("inicio-registro");
        contenedor_box.style.left="300px";
    } else{
        document.getElementById('registro').style.display="block";
        document.getElementById("uno").style.display="block";
        document.getElementById("uno").style.top="90px";
        document.getElementById("uno").style.left="30px";
        document.getElementById("dos").style.display="none";
    }
    
    
})

//Seleccionar el boton de inicio de sesion
const boton_sesion=document.getElementById('button-sesion')
boton_sesion.addEventListener("click",(event)=>{

    if (window.innerWidth > 850){
        //Agregar display block al elemento con id registro
        const contenedor_registro=document.getElementById('registro');
        contenedor_registro.style.display="none";

        //Mover el contenedor del registro hacia a derecha
        const contenedor_box=document.getElementById("inicio-registro");
        contenedor_box.style.left="10px";
    } else{
        document.getElementById('registro').style.display="none";
        document.getElementById("uno").style.display="none";
        document.getElementById("dos").style.top="90px";
        document.getElementById("dos").style.left="30px";
        document.getElementById("registro").style.top="20px";
        document.getElementById("dos").style.display="block";
    }
})


