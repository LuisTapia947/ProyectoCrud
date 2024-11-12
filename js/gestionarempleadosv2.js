
var nombreLocalStore = "empleados"




function recuperarDatosFormulario() {

    var cedula = document.getElementById("cedula")
    var nombres = document.getElementById("nombres")
    var apellidos = document.getElementById("apellidos")
    var salario = document.getElementById("salario")
}

function limpiarFormulario() {

    cedula.value = ''
    nombres.value = ''
    apellidos.value = ''
    salario.value = ''
    cedula.focus()

}

function guardar() {

    recuperarDatosFormulario()

    empleado = new Empleado(cedula.value, nombres.value,
        apellidos.value, salario.value)

    var empleados = getJSONDeLocalStore(nombreLocalStore)

    empleados.push(empleado)

    setJSONDeLocalStore(nombreLocalStore, empleados)

    limpiarFormulario()

    alert("Empleados ha sido guardado correctamente")

}

function consultar() {

    recuperarDatosFormulario()

    this.empleados = getJSONDeLocalStore(nombreLocalStore)

    var indiceEmpleados = buscarIndiceEmpleado()

    if (indiceEmpleados > -1) {

        nombres.value = empleados[indiceEmpleados].nombres
        apellidos.value = empleados[indiceEmpleados].apellidos
        salario.value = empleados[indiceEmpleados].salario

    }


}

function actualizar() {

    recuperarDatosFormulario()

    this.empleados = getJSONDeLocalStore(nombreLocalStore)

    var indiceEmpleados = buscarIndiceEmpleado()

    if (indiceEmpleados > -1) {

        empleados[indiceEmpleados].nombres = nombres.value
        empleados[indiceEmpleados].apellidos = apellidos.value
        empleados[indiceEmpleados].salario = salario.value

    }


    setJSONDeLocalStore(nombreLocalStore, empleados)

    limpiarFormulario()

    alert("Empleados ha sido actualizado correctamente")


}

function buscarIndiceEmpleado() {

    var resultado = -1

    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i].cedula == cedula.value) {

            resultado = i
        }

    }

    return resultado

}

function eliminar() {

    var empleados = getJSONDeLocalStore(nombreLocalStore)

    var indiceEmpleados = buscarIndiceEmpleado()

    if (indiceEmpleados > -1) {

        alert("Empleado " + empleados[indiceEmpleados].cedula + " eliminado")

        empleados.splice(indiceEmpleados, 1)

        setJSONDeLocalStore(nombreLocalStore, empleados)


    }

    limpiarFormulario()


}

