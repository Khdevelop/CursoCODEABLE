const altura = document.querySelector("#altura");
const base = document.querySelector("#base");
const result = document.querySelector("#result");

const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", () => {
    const valAltura = altura.value;
    const valBase = base.value;

    const result = (valBase * valAltura) / 2
    const resultMsg = `El area del triangulo es: ${result}`

    alert(resultMsg);
})