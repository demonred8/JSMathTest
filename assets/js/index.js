const calc_S_P = () => {
  const S = document.getElementById("S");
  const P = document.getElementById("P");
  let horizontal = input1.value;
  let vertical = input2.value;

  S.textContent = "Площадь: " + horizontal * vertical;
  P.textContent = "Периметр: " + (horizontal * 2 + vertical * 2);
};

const input1 = document.getElementById("input_h");
input1.addEventListener("input", calc_S_P);

const input2 = document.getElementById("input_v");
input2.addEventListener("input", calc_S_P);

// Start 17:06
// Finish 17:13
