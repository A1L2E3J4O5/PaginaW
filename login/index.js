function bienvenida()
{
    var nom = document.getElementById('nombres').value;
    var ape = document.getElementById('apellidos').value;
    var email = document.getElementById('correo').value;
    var cont = document.getElementById('clave').value;

 if (nom == nom.length ) 
     {
         Swal.fire({
             title: '¡Error!',
             text: 'Complete la casilla de nombres',
             icon: 'error',
             confirmButtonText: '¡Aceptar!'
         });
     }
 else if (ape == ape.length )
     {
         Swal.fire({
             title: '¡Error!',
             text: 'Complete la casilla de apellidos',
             icon: 'error',
             confirmButtonText: '¡Aceptar!'
         });
     }
 else if (email == email.length)
     {
         Swal.fire({
             title: '¡Error!',
             text: 'Complete la casilla de Correo Electronico',
             icon: 'error',
             confirmButtonText: '¡Aceptar!'
         });
     }
 else if(cont == cont.length)
     {
         Swal.fire({
             title: '¡Error!',
             text: 'error digite contraseña',
             icon: 'error',
             confirmButtonText: '¡Aceptar!'
         });
     }
 else
     {
         Swal.fire({
             title: '¡Complet!',
             text: 'Bienvenido',
             icon: 'success',
             confirmButtonText: '¡Aceptar!'
         });
     }
}

