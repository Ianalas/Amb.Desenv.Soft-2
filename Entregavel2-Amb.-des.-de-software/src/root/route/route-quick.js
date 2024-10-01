import { apiURL } from "../it/apiURL";

const quickSort = document.querySelector("#pageJAVA #quickSort");
const div = document.querySelector("#pageJAVA #quickSort .input-group .mb-3 .d-flex ");

export function routeQuickSort() {
  const plus = div.children[1];
  const show = div.nextElementSibling;
  let input = div.children[0];
  let saveNumber = [];
  console.log(show)

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

    let result = await funcao(saveNumber);
    output.innerText = result;
    saveNumber = [];
  };
}

async function funcao(arr){
  try {
    const response = await fetch(`${apiURL}/sort`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        numeros: arr
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro na requisição: ${response.status} - ${errorText}`);
    }
    
    const data = await response.text(); //Recebemos o retorno da API como string;
    console.log(data)
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return "Erro ao processar a solicitação.";
  }
}
