const fs = require('fs');

const notasFile = 'notas.json';

function cargarNotas() {
    try {
        return JSON.parse(fs.readFileSync(notasFile, 'utf8'));
    } catch {
        return [];
    }
}

function guardarNotas(notas) {
    fs.writeFileSync(notasFile, JSON.stringify(notas, null, 2));
}

function agregarNota(titulo, contenido) {
    const notas = cargarNotas();
    notas.push({ titulo, contenido });
    guardarNotas(notas);
    console.log('Nota agregada!');
}

function listarNotas() {
    const notas = cargarNotas();
    notas.forEach((nota, i) => console.log(`${i + 1}. ${nota.titulo}: ${nota.contenido}`));
}

const [,, comando, titulo, contenido] = process.argv;

if (comando === 'add') {
    agregarNota(titulo, contenido);
} else if (comando === 'list') {
    listarNotas();
} else {
    console.log('Comandos: add "titulo" "contenido" | list');
}
