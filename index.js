const btn = document.querySelector("#btn");
const dict = [];

function wordRelay() {
    const word = document.querySelector("#word");
    const input = document.querySelector("#input");
    const err = document.querySelector("#error");
    const lastIndex = word.textContent.length - 1;

    if (!dict.includes(input.value)) {
        if (word.textContent[lastIndex] === input.value[0]) {
            word.innerText = `${input.value}`;
            err.innerText = "";
            dict.push(input.value);
        } 
        else {
            err.innerText = "Wrong Answer";
        }
    } 
    else {
        err.innerText = "Duplicated!";
    }
    input.value = "";
    input.focus();
    console.log(dict);
}

function enterEvent(){
    document.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      if(keyCode === 13) { // Enter key
        wordRelay();
      } 
    })
}

function init() {
    btn.addEventListener("click", wordRelay);
    enterEvent();
}
init();