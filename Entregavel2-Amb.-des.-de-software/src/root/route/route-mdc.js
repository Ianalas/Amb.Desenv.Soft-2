import { apiURL } from "../it/apiURL";

const mdc = document.querySelector("#pageJAVA #mdc");
const input1 = document.querySelector("#pageJAVA #maxDivCom");
const input2 = document.querySelector("#pageJAVA #maxDivCom2");

export function routeMDC() {
  mdc.onsubmit = async (e) => {
    e.preventDefault();

    let h4 = mdc.children[1].children[0];
    h4.innerHTML = `O máximo divisor comun entre ${Number(
      input1.value
    )} e ${Number(input2.value)}:`;

    let p = mdc.children[1].children[1];
    p.innerText = await funcao(Number(input1.value), Number(input2.value));
    input1.value = "";
    input2.value = "";
    input1.focus();
  };
}

async function funcao(a, b) {
  try {
    const response = await fetch(`${apiURL}/mdc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        num1: a,
        num2: b
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
