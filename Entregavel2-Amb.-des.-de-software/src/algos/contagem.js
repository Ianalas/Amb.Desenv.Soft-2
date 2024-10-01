const contagem = document.querySelector("#pageJS #contagem");
const div = document.querySelector("#pageJS #contagem .input-group .mb-3 .d-flex ");

export function algoContagem() {
  const plus = div.children[1];
  let input = div.children[0];
  const show = div.nextElementSibling;
  let saveNumber = [];

  plus.addEventListener("click", (e) => {
    e.preventDefault();

    if (Number(input.value) > 100 || Number(input.value) < 0) {
      return alert("As notas devem ser entre 0 e 100");
    }

    saveNumber.push(Number(input.value));
    input.value = "";
    input.focus();
    show.innerHTML = `[ ${saveNumber} ]`;
  });

  contagem.onsubmit = async (e) => {
    e.preventDefault();

    const output = contagem.children[1].children[1];

    let result = funcao(saveNumber);
    output.innerText = result;
    saveNumber = [];
  };
}

function funcao(arr) {
  let n = arr.length;
  let contagem = 0;

  for (let i = 0; i < n; i++) {
    let nota = arr[i];
    if (nota >= 0 && nota <= 100) {
      if (nota >= 50) {
        contagem++;
      }
    }
  }
  return contagem;
}
