import { apiURL } from "../it/apiURL";

const scn = document.querySelector("#pageJAVA #scn");
const div = document.querySelector("#pageJAVA #scn .input-group .d-flex");

export function routeSCN() {
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
  scn.onsubmit = async (e) => {
    e.preventDefault();

    let resultado = await funcao(saveNumber);

    result.innerHTML = `A soma do conjunto é <strong>${resultado}</strong>`;
    show.innerHTML = "";
    input.focus();
    saveNumber = [];
  };
}

async function funcao(arr) {
  try {
    const response = await fetch(`${apiURL}/scn`, {
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
