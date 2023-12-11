const listaDeMaterias = ['Química', 'Biologia', 'Matemática', 'Física', 'Geografia', 'Lógica', 'Português'];

function selecionadorDeMaterias(listaDeMaterias, numeroDeMaterias) {
    const materiasSelecionadas = [];
    
    for (let i = 0; i < numeroDeMaterias; i++) {
        const indiceAleatorio = Math.floor(Math.random() * listaDeMaterias.length);
        const materiaSelecionada = listaDeMaterias.splice(indiceAleatorio, 1)[0];
        materiasSelecionadas.push(materiaSelecionada);
    }

    console.log("Matérias do dia: " + materiasSelecionadas.join(', '));
}

selecionadorDeMaterias(listaDeMaterias, 2);
