
nombreLocalStore = 'secuencia'

function getValorSecuenciaPaciente() {

    sencuencias = getJSONDeLocalStore(nombreLocalStore)

    if (sencuencias.length == 0) {

        secuencia = new Secuencia()
        sencuencias.push(secuencia)

    }

    sencuencias[0].autonumericoPaciente += 1

    setJSONDeLocalStore(nombreLocalStore, sencuencias)

    return sencuencias[0].autonumericoPaciente

}