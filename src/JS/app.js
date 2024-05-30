let htmlCircularProgress = document.getElementById("html-progress"),
    htmlProgressValue = document.getElementById("html-value");

let htmlProgressStartValue = 0,
    htmlProgressEndValue = 75,
    htmlSpeed = 15;

let htmlProgress = setInterval(() => {
    htmlProgressStartValue++;

    htmlProgressValue.textContent = `${htmlProgressStartValue}%`
    htmlCircularProgress.style.background = `conic-gradient(#00ddffa0 ${htmlProgressStartValue * 3.6}deg, #063f4c 0deg)`

    if(htmlProgressStartValue == htmlProgressEndValue){
        clearInterval(htmlProgress);
    }

}, htmlSpeed);

let jsCircularProgress = document.getElementById("js-progress"),
    jsProgressValue = document.getElementById("js-value");

let jsProgressStartValue = 0,
    jsProgressEndValue = 50,
    jsSpeed = 15;

let jsProgress = setInterval(() => {
    jsProgressStartValue++;

    jsProgressValue.textContent = `${jsProgressStartValue}`
    jsCircularProgress.style.background = `conic-gradient(#00ddffa0 ${jsProgressStartValue * 3.6}deg, #063f4c 0deg)`

    if(jsProgressStartValue == jsProgressEndValue){
        clearInterval(jsProgress);
    }
}, jsSpeed);
// let htmlCircularProgress = document.getElementById("html-progress"),
//     htmlProgressValue = document.getElementById("html-value");

// let hmtlProgressStartValue = 0,
//     htmlProgressEndValue = 90,
//     htmlSpeed = 15;

// let htmlProgress = setInterval(() => {
//     htmlProgressStartValue++;
    
//     htmlProgressValue.textContent = `${htmlProgressStartValue}%`
//     htmlCircularProgress.style.background = `conic-gradient(#00ddffa0 ${htmlProgressStartValue * 3.6}deg, #063f4c 0deg)`

//     if(htmlProgressStartValue == htmlProgressEndValue){
//         clearInterval(htmlProgress);

//     }
// }, htmlSpeed);

// let jsCircularProgress = document.getElementById("js-progress"),
//     jsProgressValue = document.getElementById("js-value");

// let jsProgressStartValue = 0,
//     jsProgressEndValue = 90,
//     jsSpeed = 15;

// let jsProgress = setInterval(() => {
//     jsProgressStartValue++;
    
//     jsProgressValue.textContent = `${jsProgressStartValue}%`
//     jsPircularProgress.style.background = `conic-gradient(#00ddffa0 ${jsProgressStartValue * 3.6}deg, #063f4c 0deg)`

//     if(jsProgressStartValue == jsProgressEndValue){
//         clearInterval(jsProgress);

//     }
// }, jspeed);