import { apiURL } from "../it/apiURL";

const fibo = document.querySelector("#pageJAVA #fibonacci");
const input = fibo.children[0].children[0].children[1];
const output = fibo.children[1].children[1];

export function routeFibonacci() {
  fibo.onsubmit = async (event) => {
    event.preventDefault();
    let num = Number(input.value);

    output.innerText = await funcao(num);
    input.value = "";
    input.focus();
  };
}
async function funcao(n) {
  try {
    const response = await fetch(`${apiURL}/fibo`, {
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
