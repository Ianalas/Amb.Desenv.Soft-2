// Change pages of languages



import "./server.js";
import "./styles/style.css";

document.getElementById("java").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("pageJS").classList.add("d-none");
    document.getElementById("pageJAVA").classList.remove("d-none");
  }
});
document.getElementById("js").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("pageJS").classList.remove("d-none");
    document.getElementById("pageJAVA").classList.add("d-none");
  }
});