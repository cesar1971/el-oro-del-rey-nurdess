let salas = [{
        titulo_sala: "Patio de entrada",
        texto_sala: "Patio de entrada",
        acciones: {
            mirar: [

            ]
        }
    },
    {
        titulo_sala: "Patio Principal",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Salon Recepcion",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Torre",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Sala de Armas",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Caballerizas",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Salon del Comedor",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Sala Real",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    },
    {
        titulo_sala: "Dormitorio del Rey",
        texto_sala: "lorem dasndashjdhasjkhfcuiwfnuiawnfuiwh"
    }

]

let avalible_verbs = ['ir', 'coger', 'usar', 'mirar', 'hablar']

let titulo_sala = document.getElementById("titulo_sala")
let texto_sala = document.getElementById("texto_sala")
let commands = document.getElementById("commands")
let button_do = document.getElementById("do")

titulo_sala.innerHTML = salas[1].titulo_sala
texto_sala.innerHTML = salas[1].texto_sala

button_do.addEventListener("click", () => {
    let split_command = commands.value.toLocaleLowerCase().split(" ")

    if (split_command.length != 2) {
        commands.value = ''
        alert('EL comando no es correcto')
        return
    }

    let verb = split_command[0];
    let paramter = split_command[1];

    if (!avalible_verbs.includes(verb)) {
        commands.value = ''
        alert('EL verbo no es correcto')
        return
    }


    console.log(split_command)
})