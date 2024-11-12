class Empleado {

    constructor(cedula, nombres, apellidos, salario) {

        this.cedula = cedula
        this.nombres = nombres
        this.apellidos = apellidos
        this.salario = salario

    }

    getCedula() {

        return this.cedula;
    }

    setCedula(cedula) {
        
        this.cedula = cedula

    }
}