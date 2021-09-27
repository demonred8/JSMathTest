const calc_S = () => {
  const S = document.getElementById("S");
  let a = Number(input1.value);
  let b = Number(input2.value);
  let c = Number(input3.value);

  let p = (a + b + c) / 2;

  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  S.textContent = `Площадь треугольника: ${s}`;
};

const input1 = document.getElementById("input_a");
input1.addEventListener("input", calc_S);

const input2 = document.getElementById("input_b");
input2.addEventListener("input", calc_S);

const input3 = document.getElementById("input_c");
input3.addEventListener("input", calc_S);

// Start 18:30
// Finish 18:56
