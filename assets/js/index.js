const calc_S_P = (e) => {
    const S = document.getElementById('S')
    const P = document.getElementById('P')
    let side = e.target.value

    S.textContent = "Площадь: " + side * side
    P.textContent = "Периметр: " + side * 4

    console.log(side)
}

const input = document.getElementById('input').addEventListener("input", calc_S_P);



