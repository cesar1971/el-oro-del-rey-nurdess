let Sala = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]

Sala[0][0] = {
    titulo_sala: "Caballerizas",
    texto_sala: "Caballerizas",
    salidas: ["e"]
}
Sala[0][1] = {
    titulo_sala: "Patio del Rastrillo",
    texto_sala: "Patio de entrada",
    salidas: ["n"]
}
Sala[0][2] = {
    titulo_sala: "Dormitorio Real",
    texto_sala: "Dormitorio del Rey",
    salidas: ["s"]
}
Sala[1][0] = {
    titulo_sala: "Herreria",
    texto_sala: "Sala de Armas",
    salidas: ["n", "s"]
}
Sala[1][1] = {
    titulo_sala: "Patio de Armas",
    texto_sala: "Este es el patio principal del Gran Castillo del rey Nurdess , al fondo se ve el pozo y hay varios carros en circulo fulambulistas y muchos puestos con comida. Estamos de celebraciones en el aniversario del Rey. Uno de los carros lleva los uniformes nuevos de la guardia, otro de ellos lleva ",
    salidas: ["n", "s"]
}
Sala[1][2] = {
    titulo_sala: "Salon Real",
    texto_sala: "Sala de Armas",
    salidas: ["n", "s"]
}
Sala[2][0] = {
    titulo_sala: "Torre del Homenaje",
    texto_sala: "Sala de Armas",
    salidas: ["n", "s"]
}
Sala[2][1] = {
    titulo_sala: "Arsenal",
    texto_sala: "Sala de Armas",
    salidas: ["n", "s"]
}
Sala[2][2] = {
    titulo_sala: "Torre Caballera",
    texto_sala: "Sala de Armas",
    salidas: ["n", "s"]
}

player = {
    position: {
        x: 0,
        y: 1
    }
}


let avalible_verbs = ['ir', 'coger', 'usar', 'mirar', 'hablar']

let titulo_sala = document.getElementById("titulo_sala")
let texto_sala = document.getElementById("texto_sala")
let commands = document.getElementById("commands")
let button_do = document.getElementById("do")

titulo_sala.innerHTML = Sala[1][1].titulo_sala
texto_sala.innerHTML = Sala[1][1].texto_sala

button_do.addEventListener("click", () => {
    let split_command = commands.value.toLocaleLowerCase().split(" ")

    if (split_command.length != 2) {
        commands.value = ''
        alert('EL comando no es correcto, dos palabras comenzando con un verbo')
        return
    }

    let verb = split_command[0];
    let parameter = split_command[1];

    if (!avalible_verbs.includes(verb)) {
        commands.value = ''
        alert('EL verbo no es correcto, recuerda: ir, coger, usar, mirar, hablar')
        return
    }

    titulo_Sala.innerHTML = Sala[parseInt(parameter)].titulo_sala
    texto_Sala.innerHTML = Sala[parseInt(parameter)].texto_sala

    console.log(split_command)
})