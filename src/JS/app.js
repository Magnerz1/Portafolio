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

let tsCircularProgress = document.getElementById("ts-progress"),
    tsProgressValue = document.getElementById("ts-value");

let tsProgressStartValue = 0,
    tsProgressEndValue = 35,
    tsSpeed = 15;

let tsProgress = setInterval(() => {
    tsProgressStartValue++;

    tsProgressValue.textContent = `${tsProgressStartValue}`
    tsCircularProgress.style.background = `conic-gradient(#00ddffa0 ${tsProgressStartValue * 3.6}deg, #063f4c 0deg)`

    if(tsProgressStartValue == tsProgressEndValue){
        clearInterval(tsProgress);
    }
}, tsSpeed);

let wpCircularProgress = document.getElementById("wp-progress"),
    wpProgressValue = document.getElementById("wp-value");

let wpProgressStartValue = 0,
    wpProgressEndValue = 70,
    wpSpeed = 15;

let wpProgress = setInterval(() => {
    wpProgressStartValue++;

    wpProgressValue.textContent = `${wpProgressStartValue}`
    wpCircularProgress.style.background = `conic-gradient(#00ddffa0 ${wpProgressStartValue * 3.6}deg, #063f4c 0deg)`

    if(wpProgressStartValue == wpProgressEndValue){
        clearInterval(wpProgress);
    }
}, wpSpeed);

let sqlCircularProgress = document.getElementById("sql-progress"),
    sqlProgressValue = document.getElementById("sql-value");

let sqlProgressStartValue = 0,
    sqlProgressEndValue = 30,
    sqlSpeed = 10;

let sqlProgress = setInterval(() => {
    sqlProgressStartValue++;

    sqlProgressValue.textContent = `${sqlProgressStartValue}`
    sqlCircularProgress.style.background = `conic-gradient(#00ddffa0 ${sqlProgressStartValue * 3.6}deg, #063f4c 0deg)`

    if(sqlProgressStartValue == sqlProgressEndValue){
        clearInterval(sqlProgress);
    }
}, sqlSpeed);

let phCircularProgress = document.getElementById("ph-progress"),
    phProgressValue = document.getElementById("ph-value");

let phProgressStartValue = 0,
    phProgressEndValue = 27,
    phSpeed = 15;

let phProgress = setInterval(() => {
    phProgressStartValue++;
    phProgressValue.textContent = `${phProgressStartValue}`
    phCircularProgress.style.background = `conic-gradient(#00ddffa0 ${phProgressStartValue * 3.6}deg, #063f4c 0deg)`

    if(phProgressStartValue == phProgressEndValue){
        clearInterval(phProgress);
    }
}, phSpeed);

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