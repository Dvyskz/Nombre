function mostrarCarga() {
    let nombre = document.getElementById("nombre").value;
    
    if (nombre.trim() === "") {
        alert("¡Escribe tu nombre!");
        return;
    }
    
    document.getElementById("pregunta").style.display = "none";
    document.getElementById("cargando").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("cargando").style.display = "none";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").innerText = `Tu nombre es\n\n ${nombre}`;
    }, 3000);
}
