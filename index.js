

// interacting nav icons
const resetBtn = document.querySelector(".reset-popup");
const icon1Display = document.querySelector(".icon1Display");
const icon2Display = document.querySelector(".icon2Display");
const icon3Display = document.querySelector(".icon3Display");
const icon4Display = document.querySelector(".icon4Display");

function icon1Dis(){
    icon1Display.style.display = 'flex';
    icon2Display.style.display = 'none';
    icon3Display.style.display = 'none';
    icon4Display.style.display = 'none';
    resetBtn.style.display = 'none';
}

function icon2Dis(){
    icon1Display.style.display = 'none';
    icon2Display.style.display = 'flex';
    icon3Display.style.display = 'none';
    icon4Display.style.display = 'none';
    resetBtn.style.display = 'none';
}

function icon3Dis(){
    icon1Display.style.display = 'none';
    icon2Display.style.display = 'none';
    icon3Display.style.display = 'flex';
    icon4Display.style.display = 'none';
    resetBtn.style.display = 'none';
}

function icon4Dis(){
    icon1Display.style.display = 'none';
    icon2Display.style.display = 'none';
    icon3Display.style.display = 'none';
    icon4Display.style.display = 'flex';
    resetBtn.style.display = 'none';
}

function resetBtnDis(){
/*     icon1.style.display = 'flex';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none'; */
    resetBtn.style.display = 'flex';
}

//interacting the counter1

const counter1 = document.getElementById("counter1");
const progressDowner1 = document.getElementById("pro-down1");
let initialCount = 1000;

function proCount1(){
    let countCur = parseInt(counter1.textContent, 10);
    if(countCur > 0){
        countCur -= 1;
        counter1.textContent = countCur;
        localStorage.setItem("counterValue1", countCur);
    }
    let progressHeight = (countCur * 100) / initialCount;

    progressDowner1.style.height = `${progressHeight}%`;
    localStorage.setItem("progressHeight1", progressHeight);
}

//interacting the counter2

const counter2 = document.getElementById("counter2");
const progressDowner2 = document.getElementById("pro-down2");
let initialCount2 = 1000;

function proCount2(){
    let countCur = parseInt(counter2.textContent, 10);
    if(countCur > 0){
        countCur -= 1;
        counter2.textContent = countCur;
        localStorage.setItem("counterValue2", countCur);
    }
    let progressHeight = (countCur * 100) / initialCount2;

    progressDowner2.style.height = `${progressHeight}%`;
    localStorage.setItem("progressHeight2", progressHeight); 
}

//interacting the counter3

const counter3 = document.getElementById("counter3");
const progressDowner3 = document.getElementById("pro-down3");
let initialCount3 = 1000;

function proCount3(){
    let countCur = parseInt(counter3.textContent, 10);
    if(countCur > 0){
        countCur -= 1;
        counter3.textContent = countCur;
        localStorage.setItem("counterValue3", countCur);
    }
    let progressHeight = (countCur * 100) / initialCount3;

    progressDowner3.style.height = `${progressHeight}%`;
    localStorage.setItem("progressHeight3", progressHeight);
}

//interacting the counter4

const counter4 = document.getElementById("counter4");
const progressDowner4 = document.getElementById("pro-down4");
let initialCount4 = 1000;

function proCount4(){
    let countCur = parseInt(counter4.textContent, 10);
    if(countCur > 0){
        countCur -= 1;
        counter4.textContent = countCur;
        localStorage.setItem("counterValue4", countCur);
    }
    let progressHeight = (countCur * 100) / initialCount4;

    progressDowner4.style.height = `${progressHeight}%`;
    localStorage.setItem("progressHeight4", progressHeight);
}

// reset counter

function resetCount(){
    if(icon1Display.style.display == "flex"){
        counter1.textContent = 1000;
        initialCount = 1000;
        progressDowner1.style.height = "100%";
        localStorage.setItem("counterValue1", initialCount);
        localStorage.setItem("progressHeight1", 100);
    }
    else if(icon2Display.style.display == "flex"){
        counter2.textContent = 1000;
        initialCount2 = 1000;
        progressDowner2.style.height = "100%";
        localStorage.setItem("counterValue2", initialCount2);
        localStorage.setItem("progressHeight2", 100);
    }
    else if(icon3Display.style.display == "flex"){
        counter3.textContent = 1000;
        initialCount3 = 1000;
        progressDowner3.style.height = "100%";
        localStorage.setItem("counterValue3", initialCount3);
        localStorage.setItem("progressHeight3", 100);
    }
    else if(icon4Display.style.display == "flex"){
        counter4.textContent = 1000;
        initialCount4 = 1000;
        progressDowner4.style.height = "100%";
        localStorage.setItem("counterValue4", initialCount4);
        localStorage.setItem("progressHeight4", 100);
    }
    resetBtn.style.display = 'none';
}

// close reset 

function closeReset(){
    resetBtn.style.display = 'none';
}


// local save

window.addEventListener("load", function (){
    // save 1
    let savedCounter1 = localStorage.getItem("counterValue1");
    let savedProgress1 = localStorage.getItem("progressHeight1");
    // save 2
    let savedCounter2 = localStorage.getItem("counterValue2");
    let savedProgress2 = localStorage.getItem("progressHeight2");
    // save 3
    let savedCounter3 = localStorage.getItem("counterValue3");
    let savedProgress3 = localStorage.getItem("progressHeight3");
    // save 4
    let savedCounter4 = localStorage.getItem("counterValue4");
    let savedProgress4 = localStorage.getItem("progressHeight4");
    // get value for counter 1
    if(savedCounter1 !== null){
        progressDowner1.style.height = `${savedProgress1}%`;
    }

    if(savedCounter1 !== null){
        counter1.textContent = savedCounter1;
    }
    // get value for counter 2
    if(savedCounter2 !== null){
        progressDowner2.style.height = `${savedProgress2}%`;
    }

    if(savedCounter2 !== null){
        counter2.textContent = savedCounter2;
    }
    // get value for counter 3
    if(savedCounter3 !== null){
        progressDowner3.style.height = `${savedProgress3}%`;
    }

    if(savedCounter3 !== null){
        counter3.textContent = savedCounter3;
    }
    // get value for counter 4
    if(savedCounter4 !== null){
        progressDowner4.style.height = `${savedProgress4}%`;
    }

    if(savedCounter4 !== null){
        counter4.textContent = savedCounter4;
    }
})
