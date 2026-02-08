function navegar(idVista) {
    // 1. Ocultar todas las vistas
    const vistas = document.querySelectorAll('.vista');
    vistas.forEach(vista => {
        vista.classList.remove('active');
    });

    // 2. Mostrar la vista seleccionada
    const vistaAmostrar = document.getElementById('vista-' + idVista);
    if (vistaAmostrar) {
        vistaAmostrar.classList.add('active');
    }

    // 3. Actualizar el menú (para que se pinte de color el link activo)
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        // Obtenemos el nombre de la vista desde el atributo onclick
        const vistaName = link.getAttribute('onclick').match(/'([^']+)'/)[1];
        if(vistaName === idVista) {
            link.classList.add('active');
        }
    });

    // 4. Hacer scroll arriba suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}