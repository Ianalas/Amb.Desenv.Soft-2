const scn = document.querySelector("#pageJS #scn");
const div = document.querySelector("#pageJS #scn .input-group .d-flex");

export function algoSomaConj() {
  let saveNumber = [];
  let input = div.children[0];
  const plus = div.children[1];
  const show = div.nextElementSibling;

  plus.addEventListener("click", (e) => {
    e.preventDefault();

    saveNumber.push(Number(input.value));
    input.value = "";
    input.focus();
    show.innerHTML = `[ ${saveNumber} ]`;
  });

  const result = scn.children[1].children[1];
  scn.onsubmit = (e) => {
    e.preventDefault();

    result.innerHTML = `A soma do conjunto é <strong>${funcao(
      saveNumber
    )}</strong>`;
    show.innerHTML = "";
    input.focus();
    saveNumber = [];
  };
}

function funcao(arr) {
  let soma = 0;
  arr.forEach((num) => {
    soma += num;
  });
  return soma;
}
