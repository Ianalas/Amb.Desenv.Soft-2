const fibo = document.querySelector("#pageJS #fibonacci");
const input = fibo.children[0].children[0].children[1];
const output = fibo.children[1].children[1];

export function algoFibonacci() {
  fibo.onsubmit = (event) => {
    event.preventDefault();
    let num = Number(input.value);

    output.innerText = funcao(num);
  };
}

function funcao(n) {
  let a = 0;
  let b = 1;
  let i = 2;
  let c;
  const result = [];
  if (n == 1) {
    return a;
  }
  result.push(a, b);

  while (i < n) {
    i = i + 1;
    c = a + b;
    result.push(c);
    a = b;
    b = c;
  }
  return result;
}
