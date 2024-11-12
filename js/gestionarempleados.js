function guardar() {

    var cedula = document.getElementById("cedula")
    var nombres = document.getElementById("nombres")
    var apellidos = document.getElementById("apellidos")
    var salario = document.getElementById("salario")

    empleado = new Empleado(cedula.value,nombres.value,
        apellidos.value,salario.value)

    var empleados  = JSON.parse(
        localStorage.getItem("empleados") || "[]")  

    empleados.push(empleado)

    localStorage.setItem("empleados", JSON.stringify(empleados))    

    cedula.value = ''
    nombres.value = ''
    apellidos.value = ''
    salario.value = ''
    cedula.focus()
    
    alert("Empleado guardado exitosamente")
    

    console.log(empleados)



}

function actualizar() {

    var cedula = document.getElementById("cedula")
    var nombres = document.getElementById("nombres")
    var apellidos = document.getElementById("apellidos")
    var salario = document.getElementById("salario")
    
    var empleados  = JSON.parse(
        localStorage.getItem("empleados") || "[]") 
        
    for (const empleado of empleados) {

        if (empleado.cedula == cedula.value) {

            empleado.nombres = nombres.value
            empleado.apellidos = apellidos.value
            empleado.salario = salario.value

            break
        }

    }

    localStorage.setItem("empleados", JSON.stringify(empleados))    

}

function eliminar() {

    var cedula = document.getElementById("cedula")
    
    var empleados  = JSON.parse(
        localStorage.getItem("empleados") || "[]") 
    
    console.log(empleados)

    for (let i = 0; i < empleados.length; i++) {
        
        if (empleados[i].cedula == cedula.value) {

            alert ("Empleado " + empleados[i].cedula + " eliminado")            

            empleados.splice(i,1)
            localStorage.setItem("empleados", JSON.stringify(empleados)) 
            

            break
        }
        
    }

}

function buscar() {

    var cedula = document.getElementById("cedula")
    
    var empleados  = JSON.parse(
        localStorage.getItem("empleados") || "[]") 
        
    for (const empleado of empleados) {

        if (empleado.cedula == cedula.value) {

            var nombres = document.getElementById("nombres")
            var apellidos = document.getElementById("apellidos")
            var salario = document.getElementById("salario")

            nombres.value = empleado.nombres
            apellidos.value = empleado.apellidos
            salario.value = empleado.salario

            break
        }
       
    }


}

function nuevo() {

}