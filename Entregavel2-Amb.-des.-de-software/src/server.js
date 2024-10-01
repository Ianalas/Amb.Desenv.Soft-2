import { algoContagem } from "./algos/contagem.js";
import { algoFibonacci } from "./algos/fibonacci.js";
import { algoMDC } from "./algos/maxComDiv.js";
import { algoPrimoNum } from "./algos/primoNum.js";
import { algoQuickSort } from "./algos/quickSort.js";
import { algoSomaConj } from "./algos/somaConj.js";
import { routeContagem } from "./root/route/route-cont.js";
import { routeFibonacci } from "./root/route/route-fibo.js";
import { routeMDC } from "./root/route/route-mdc.js";
import { routePrimoNum } from "./root/route/route-primo.js";
import { routeQuickSort } from "./root/route/route-quick.js";
import { routeSCN } from "./root/route/route-scn.js";

import { toggleDisplay } from "./utils/toogleDisplay.js";

const selectFormularioJS = document.querySelector("#pageJS #formulario");
const option = document.querySelector("#pageJS #opcoes");
//Questoes
const quickSort = document.querySelector("#pageJS #quickSort");
const contagem = document.querySelector("#pageJS #contagem");
const mdc = document.querySelector("#pageJS #mdc");
const numPrimo = document.querySelector("#pageJS #numPrimo");
const scn = document.querySelector("#pageJS #scn");
const fibo = document.querySelector("#pageJS #fibonacci");

selectFormularioJS.onsubmit = (e) => {
  e.preventDefault();

  if (option.value === "quicksort") {
    toggleDisplay(quickSort);
    algoQuickSort();
  }
  if (option.value === "contagem") {
    toggleDisplay(contagem);
    algoContagem();
  }
  if (option.value === "MDC") {
    toggleDisplay(mdc);
    algoMDC();
  }
  if (option.value === "numPrimo") {
    toggleDisplay(numPrimo);
    algoPrimoNum();
  }
  if (option.value === "SCN") {
    toggleDisplay(scn);
    algoSomaConj();
  }
  if (option.value === "fibo") {
    toggleDisplay(fibo);
    algoFibonacci();
  }
};

const selectFormularioJava = document.querySelector("#pageJAVA #formulario");

const optionj = document.querySelector("#pageJAVA #opcoes");
//Questoes
const quickSortj = document.querySelector("#pageJAVA #quickSort");
const contagemj = document.querySelector("#pageJAVA #contagem");
const mdcj = document.querySelector("#pageJAVA #mdc");
const numPrimoj = document.querySelector("#pageJAVA #numPrimo");
const scnj = document.querySelector("#pageJAVA #scn");
const fiboj = document.querySelector("#pageJAVA #fibonacci");

selectFormularioJava.onsubmit = (e) => {
  e.preventDefault();

  if (optionj.value === "quicksort") {
    toggleDisplay(quickSortj);
    routeQuickSort();
  }
  if (optionj.value === "contagem") {
    toggleDisplay(contagemj);
    routeContagem();
  }
  if (optionj.value === "MDC") {
    toggleDisplay(mdcj);
    routeMDC();
  }
  if (optionj.value === "numPrimo") {
    toggleDisplay(numPrimoj);
    routePrimoNum();
  }
  if (optionj.value === "SCN") {
    toggleDisplay(scnj);
    routeSCN();
  }
  if (optionj.value === "fibo") {
    toggleDisplay(fiboj);
    routeFibonacci();
  }
};
