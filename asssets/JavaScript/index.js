precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

total = document.querySelector('.valor-total')

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btn-mas").onclick = () => {
        let contadorMas = document.querySelector('.cantidad');
        let contador = Number(contadorMas.innerHTML);
        contador = contador + 1;
        contadorMas.innerHTML = contador;
        total.innerHTML = precio * contador
    };

    document.querySelector("#btn-menos").onclick = () => {
        let contadorMenos = document.querySelector('.cantidad');
        let contador = Number(contadorMenos.innerHTML);
        if (contador > 0) {
            contador = contador - 1;
        }
        contadorMenos.innerHTML = contador;
        total.innerHTML = precio * contador
    };
});

