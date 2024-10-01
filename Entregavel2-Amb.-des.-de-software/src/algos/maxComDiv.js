const mdc = document.querySelector("#pageJS #mdc");
const input1 = document.querySelector("#pageJS #maxDivCom");
const input2 = document.querySelector("#pageJS #maxDivCom2");

export function algoMDC() {
  mdc.onsubmit = (e) => {
    e.preventDefault();

    let h4 = mdc.children[1].children[0];
    h4.innerHTML = `O máximo divisor comun entre ${Number(
      input1.value
    )} e ${Number(input2.value)}:`;

    let p = mdc.children[1].children[1];
    p.innerText = funcao(input1.value, input2.value);
  };
}

function funcao(a, b) {
  [a, b] = [Number(a), Number(b)];
  let div, maior;

  if (a > b) {
    maior = a;
  } else {
    maior = b;
  }
  for (let i = 1; i <= maior; i++) {
    if (a % i == 0 && b % i == 0) {
      div = i;
    }
  }
  return div;
}
