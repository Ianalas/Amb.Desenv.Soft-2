import { apiURL } from "../it/apiURL";

const numPrimo = document.querySelector("#pageJAVA #numPrimo");
const input = document.querySelector("#pageJAVA #primo");

export function routePrimoNum() {
  numPrimo.onsubmit = async (e) => {
    e.preventDefault();
    let val = input.value;
    let p = numPrimo.children[1].children[1];
    p.innerHTML = await funcao(val);
    input.value = "";
    input.focus();
  };
}

async function funcao(n) {
  try {
    const response = await fetch(`${apiURL}/primo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ numero: n }),
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
