const quickSort = document.querySelector("#pageJS #quickSort");
const div = document.querySelector("#pageJS #quickSort .input-group .mb-3 .d-flex ");

export function algoQuickSort() {
  const plus = div.children[1];
  const show = div.nextElementSibling;
  let input = div.children[0];
  let saveNumber = [];

  plus.addEventListener("click", (e) => {
    e.preventDefault();

    saveNumber.push(Number(input.value));
    input.value = "";
    input.focus();
    show.innerHTML = `[ ${saveNumber} ]`;
  });

  quickSort.onsubmit = async (e) => {
    e.preventDefault();

    const output = quickSort.children[1].children[1];

    let result = funcao(saveNumber);
    output.innerText = result;
    saveNumber = [];
  };
}

function funcao(arr){
  if(arr.length === 0) return "Sem número";
  if(arr.length === 0) return arr;

  const vetor = arr;
  for (let j = 0; j < arr.length - 1; j++) { //Simulando a recursividade
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (vetor[i] > vetor[i + 1]) {
        let aux = vetor[i];
        vetor[i] = vetor[i + 1];
        vetor[i + 1] = aux;
      }
    }
  }
  return vetor;
}
