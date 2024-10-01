import { apiURL } from "../it/apiURL";

const contagem = document.querySelector("#pageJAVA #contagem");
const div = document.querySelector("#pageJAVA #contagem .input-group .mb-3 .d-flex ");

export function routeContagem() {
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

    const result = await funcao(saveNumber);
    output.innerText = Number(result) === 0 ? "Ninguém passou" : `Passaram ${result}`;
    saveNumber = [];
  };
}

async function funcao(arr) {
  try {
    const response = await fetch(`${apiURL}/cont`, {
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
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return "Erro ao processar a solicitação.";
  }
}
