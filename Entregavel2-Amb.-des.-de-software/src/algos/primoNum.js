const numPrimo = document.querySelector("#pageJS #numPrimo");
const input = document.querySelector("#pageJS #primo");

export function algoPrimoNum() {
  numPrimo.addEventListener("change", (e) => {
    e.preventDefault();
    let val = Number(input.value);
    let p = numPrimo.children[1].children[1];
    p.innerHTML = funcao(val);
  });

  numPrimo.onsubmit = (e) => { //evita recarregamento da page
    e.preventDefault();
  };
}

function funcao(n) {
  let cont = 0;

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        cont = cont + 1;
      }
    }
  }
  return cont == 2 ? `O número <strong>${n}</strong> é primo` : `O número <strong>${n}</strong> NÃO é primo`;
}
