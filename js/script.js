document.addEventListener("DOMContentLoaded", () => {
    const productoSelect = document.getElementById("producto");
    const descuentoInput = document.getElementById("descuento");
    const calcularBtn = document.getElementById("calcular");
    const precioFinalSpan = document.getElementById("precioFinal");

    // Si hay un precio guardado en localStorage, lo mostramos

    if (localStorage.getItem("precioFinal")) {
        precioFinalSpan.textContent = `$${localStorage.getItem("precioFinal")}`;
    }

    calcularBtn.addEventListener("click", () => {
        const precioBase = parseFloat(productoSelect.value);
        const descuento = parseFloat(descuentoInput.value) || 0;

        if (descuento < 0 || descuento > 100) {
            alert("El descuento debe estar entre 0% y 100%");
            return;
        }

        // Cálculo del precio final

        const precioFinal = precioBase - (precioBase * (descuento / 100));

        // Mostrar resultado y guardar en localStorage
        
        precioFinalSpan.textContent = `$${precioFinal.toFixed(2)}`;
        localStorage.setItem("precioFinal", precioFinal.toFixed(2));
    });
});

document.getElementById("carrito").addEventListener("click", () => {
    window.location.href = "carrito.html";
});