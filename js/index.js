function cambiarpag(){
    window.open("file:///C:/Users/APRENDIZ/Desktop/figurasGeometricas/index.html")
}
function capturarDatos(){
    var nombre = document.getElementById("nombre"). value;
    var edad    = document.getElementById("edad"). value;
    var fecha   = document.getElementById("fecha"). value;
    var genero  = document.getElementById("genero").value;
    var email   = document.getElementById("email"). value;
    var descripcion = document.getElementById("descripcion").value;
    var color   = document.getElementById("color"). value;

    var mFoto = document.getElementById("mFoto");
    var mNombre = document.getElementById("mNombre");
    var mEdad   = document.getElementById("mEdad");
    var mFecha  = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail  = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mNombre.textContent = nombre;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if(genero == "Masculino") {
        mFoto.src = "img/homero.png";
    }
    else if(genero == "Femenino") {
        mFoto.src = "img/marge.png";
    }
    else {
        mFoto.src = "img/otro.png";
    }

    
    switch (color) {
        case "azul":
            
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.toggle ("azul")
            break;

        case "rojo":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add ("rojo")
            break;

        case "naranja":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add ("naranja")
            break;
    }
}
