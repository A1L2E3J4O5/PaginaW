var identificacion,nombres,ape,correo,usuario,contraseña,contraseñaVal;

function registro ()
{
 identificacion = document.getElementById('ide').value;
 nombres = document.getElementById('nom').value;
 correo = document.getElementById('CE').value;
 usuario = document.getElementById('nomU').value;
 contraseña = document.getElementById('cont').value;
 contraseñaVal = document.getElementById('cont2').value;

    if (identificacion == identificacion.length ) 
        {
                Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla de numero de identificacion',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else if (nombres == nombres.length ) 
        {
                Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla de nombres',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else if (correo == correo.length ) 
        {
                Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla de correo electronico',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else if (usuario == usuario.length ) 
        {
            Swal.fire({
            title: '¡Error!',
            text: 'nombre de usuario',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        }        
    else if (contraseña == contraseña.length ) 
        {
            Swal.fire({
            title: '¡Error!',
            text: 'contraseña',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        }       
    else if (contraseñaVal == contraseñaVal.length ) 
        {
            Swal.fire({
            title: '¡Error!',
            text: 'Complete la casilla de validacion de contraseña',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        }
    else if (contraseña != contraseñaVal)
        {
            Swal.fire({
                title: '¡Error!',
                text: 'valide contraseñas',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
                });
        }
    else if (contraseña == contraseñaVal)
        { 
            validacion()
            //alert("bien")
        }

}
function validacion ()
{
    if (contraseña.length < 7 || contraseña.length > 14)
    {
        Swal.fire({
            title: '¡Error!',
            text: 'La contraseña debe ser entre 7 y 14 caracteres',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
    }
    
    else if(!/^\d+$/.test(contraseña || contraseñaVal))
    {
        Swal.fire({
            title: '¡Error!',
            text: 'La contraseña solo debe contener números.',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        event.preventDefault();
    }

    else
    {
        Bienvenido()
    }
}
function Bienvenido()
{
        Swal.fire({
        title: '¡Complet!',
        text: 'Bienvenido',
        icon: 'success',
        confirmButtonText: '¡Aceptar!'
        });
    
}

