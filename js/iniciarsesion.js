/*
 Usuarios tipo gerente
  - Usuario: gerente
  - password: 123

 Usuarios tipo administrador
  - Usuario: admin
  - password: 123
 
  Usuarios tipo vendedor
  - Usuario: vendedor
  - password: 123

*/

function iniciarSesion() {

  var usuario = document.getElementById("usuario")
  var password = document.getElementById("password")

  if (usuario.value == 'gerente' && password.value == '123')  {

    window.location.href = '../html/menugerente.html'

  } else if (usuario.value == 'admin' && password.value == '123')  {

     window.location.href = '../html/menuadministrador.html'

  } else if (usuario.value == 'vendedor' && password.value == '123')  {

    window.location.href = '../html/menuvendedor.html'

 } else {

    alert("Usuario y/o password errado")
    usuario.value = ''
    password.value = ''
    usuario.focus()

 }
    
}