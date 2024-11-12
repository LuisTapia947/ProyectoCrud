var nombreLocalStore = "empleados"

function recuperarDatosFormulario(){

    var cedula = document.getElementById("cedula")
    var nombres = document.getElementById("nombre")
    var apellidos = document.getElementById("apellido")
    var salario = document.getElementById("salario")
}
function limpiarFormulario(){

    cedula.value = " "
    nombres.value = " "
    apellidos.value = " "
    salario.value = " "
    cedula.focus()

}
function guardar(){

    recuperarDatosFormulario()

    empleado = new Empleado(cedula.value, nombres.value, apellidos.value, salario.value)

    var empleados = JSON.parse(localStorage.getItem("empleado") || "[]")
    empleados.push(empleado)

    setJSONDeLocalStore(nombreLocalStore, empleados)

    limpiarFormulario()

    alert("Empleado ha sido guardado correctamente")
}
function buscar(){

    recuperarDatosFormulario()

    var empleados = getJSONDeLocalStore(nombreLocalStore)

    for (const empleado of empleados) {

        if (empleado.cedula == cedula.value) {

            nombres.value = empleado.nombres
            apellidos.value = empleado.apellidos
            salario.value = empleado.salario
            
            break
        }

    }

}

