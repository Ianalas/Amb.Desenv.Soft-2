const displays = [
  document.querySelector("#pageJS #quickSort"),
  document.querySelector("#pageJS #contagem"),
  document.querySelector("#pageJS #mdc"),
  document.querySelector("#pageJS #numPrimo"),
  document.querySelector("#pageJS #scn"),
  document.querySelector("#pageJS #fibonacci"),
  document.querySelector("#pageJAVA #quickSort"),
  document.querySelector("#pageJAVA #contagem"),
  document.querySelector("#pageJAVA #mdc"),
  document.querySelector("#pageJAVA #numPrimo"),
  document.querySelector("#pageJAVA #scn"),
  document.querySelector("#pageJAVA #fibonacci")
]

export function toggleDisplay(element){
    displays.forEach((e)=>{
        if(e.className.includes("d-none") ){
            return 
        }
        e.classList.add("d-none")
    })
    element.classList.remove("d-none");
}