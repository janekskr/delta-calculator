const generateDelta = () => {
    let a
    let b
    let c

    do {
        a = +prompt("podaj a")
    } while (isNaN(a) && a !== 0)

    do {
        b = +prompt("podaj b")
    } while (isNaN(b))

    do {
        c = +prompt("podaj c")
    } while (isNaN(c))

    const delta = b ** 2 - 4 * a * c

    const deltaSqrt = Math.sqrt(delta)

    const x1 = (-b - deltaSqrt) / (2 * a)
    const x2 = (-b + deltaSqrt) / (2 * a)

    document.getElementById("delta-container").innerHTML = (a && b && c) ? `
        <p> \u0394 = ${delta}.</p> 
        <p> Równanie ma ${delta === 0 ? "1 rozwiązanie:" : delta < 0 ? "nie ma rozwiązania": "2 rozwiązania:"}</p>
        <p> ${delta === 0 ? `x = ${-b / (2 * a)}` : delta > 0 ? `x<sub>1</sub> = ${x1.toFixed(2)}, x<sub>2</sub> = ${x2.toFixed(2)}`: ""}</p>
        ` : "Aby obliczyć delte musisz najpierw podać liczby"
}


document.getElementById("button").addEventListener("click", generateDelta)

generateDelta()