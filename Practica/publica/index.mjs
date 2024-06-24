const obtenemosProductos = async () => {
    // Solicitamos api
    const datos = await fetch('http://localhost:3000/personajes');
    const jsonPersonajes = await datos.json();
    const personajes = jsonPersonajes;
    // Renderizamos
    renderizar('personajes', personajes);
};

obtenemosProductos()

const renderizar = (id, personajes) => {
    // Donde se renderiza
    const contenedor = document.getElementById(id);
    // Construimos el HTML
    let html = '';
    personajes.forEach((personaje) => {
        html += `<article>
                    <ul>
                        <li class="personajes-id">ID: ${personaje.id}</li>
                        <li class="personajes-nombre">Nombre: ${personaje.name}
                        <li class="personajes-estado">Estado: ${personaje.status}
                        <li class="personajes-especie">Especie: ${personaje.species}
                    </ul>
            </article>`;
    });
    // Asignamos el contenido
    contenedor.innerHTML = html;
};

