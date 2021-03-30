const botão = document.querySelector("#buscar-paciente")

botão.addEventListener('click', function () {
    console.log("Buscando pacientes!")

    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function () {
        let erroAjax = document.querySelector("#erro-ajax")

        if (xhr.status == 200) {
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)

            for (let i = 0; i < pacientes.length; i++) {
                const paciente = pacientes[i]

                adicionaPacienteNaTabela(paciente)
            }

            erroAjax.classList.add("invisivel")

        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel")
        }
    })

    xhr.send()
})