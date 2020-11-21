// References
const listado = document.querySelector( '#listado' );

// Muestra los proyectos en el HTML
const showProjects = portafolio => {
    let html = ``;
    
    portafolio.forEach( ({ id, desc, nombre }) => {
        html += `
            <div class="elemento">
                <img src="img/${ id }.jpg" />

                <div class="contenido">
                    <h3>${ nombre }</h3>
                    <p>${ desc }</p>
                </div>
            </div>
        `;
    });

    listado.innerHTML = html;
}

// Carga los proyecto ( lo trae desde un archivo .json )
const loadProjects = async () => {

    const response = await fetch( 'datos.json' );
    const { portafolio } = await response.json();

    showProjects( portafolio );
}

// Events
document.addEventListener( 'DOMContentLoaded', loadProjects );