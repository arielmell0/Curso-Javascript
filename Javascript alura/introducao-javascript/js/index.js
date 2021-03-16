var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector('.info-imc')
    

    var calculoImc = peso / (altura * altura)


    //validação
    var alturaValida = true
    var PesoValida = true


    if (peso < 0 || peso > 1000) {
        tdImc.textContent = 'Peso inválido!'
        PesoValida = false
        paciente.classList.add("paciente-invalido")
    } else if (altura > 3 || altura < 0) {
        tdImc.textContent = 'Altura inválida!'
        alturaValida = false
        paciente.classList.add("paciente-invalido")
    } else {
        tdImc.textContent = calculoImc.toFixed(2)
    }
}




