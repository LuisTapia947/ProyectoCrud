
nombreLocalStore = 'usuarios'

function guardar() {

    var usuario = document.getElementById("usuario")
    var password = document.getElementById("password")
    var rol = document.getElementById("rol")

    usuario = new Usuario(usuario.value, password.value,
        rol.value)

    var usuarios = getJSONDeLocalStore(nombreLocalStore)

    usuarios.push(usuario)

    setJSONDeLocalStore(nombreLocalStore, usuarios)

    console.log(usuarios)

    alert("Empleados ha sido guardado correctamente")

}




function iniciarSesion() {

    var usuario = document.getElementById("usuario")
    var password = document.getElementById("password")
    
    usuarios = getJSONDeLocalStore(nombreLocalStore)

    sw = false

    for (const usuarioJSON of usuarios) {

        if (usuario.value == usuarioJSON.usuario && 
            password.value == usuarioJSON.password)  {

            switch(usuarioJSON.rol) {

                case 'paciente':

                      window.location.href = '../html/menugerente.html'
                      break

                case 'administrador':

                    window.location.href = '../html/menuadministrador.html'
                    break

            }

            sw = true

            break
        }
        
    }


    if (!sw)
        alert("Usuario y/o password errado")

}