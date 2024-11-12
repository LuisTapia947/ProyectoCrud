nombreLocalStore = 'usuarios'

function agregarIDentificacores() {

    var matriculas = document.getElementById("matriculas")
    
    var usuarios = getJSONDeLocalStore(nombreLocalStore)

    for (const usuarioJson of usuarios) {

        var option = document.createElement("option");
        option.text = usuarioJson.usuario;
        option.value = usuarioJson.usuario;
        matriculas.add(option);
        
    }

}

