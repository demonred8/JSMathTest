const calc_S_P = () => {
  const S = document.getElementById("S");
  const P = document.getElementById("P");
  let circleDiameter = input1.value;

  S.textContent =
    "Площадь круга: " + (Math.PI * (circleDiameter * circleDiameter)) / 4;
  P.textContent = "Длина окружности: " + Math.PI * circleDiameter;
};

const input1 = document.getElementById("input_d");
input1.addEventListener("input", calc_S_P);

// Start 17:20
// Finish 17:38
