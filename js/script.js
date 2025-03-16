
// 

/***** declare variables *****/

var doc = document;
var docBody = document.body;
var answer = 0;
var arrOptions = [];
const maxAnswer = 10;
var wrongSound = doc.getElementById("wrong");
var rightSound = doc.getElementById("right");
var problem = doc.querySelector('.problem');
var bottom = doc.querySelector('.bottom');
var btnNext =  doc.querySelector('.next-button')
var btns = doc.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', btnClick);
    }

btnNext.addEventListener('click', nextClicked)

writeProblem();
writeOptions();
writeButtons();


//generates the problem
function writeProblem(){
    var LNum = Math.floor(Math.random() * (maxAnswer/2));
    var RNum = Math.floor(Math.random() * (maxAnswer/2));
    answer = LNum + RNum;
    problem.textContent = LNum + " + " + RNum + " = ?"; 
}

//generates wrongs answers
function writeOptions(){
    arrOptions.push(answer);
    while(arrOptions.length < 4){
        var wrongAnswer = Math.floor(Math.random() * 10);
        if(arrOptions.indexOf(wrongAnswer) === -1){
            arrOptions.push(wrongAnswer);
        }
    }
}

//creates a button with the right answer
function writeButtons(){
    var rightBtnID = Math.floor(Math.random() * 4) + 1;
    var rightBtn = doc.getElementById(rightBtnID);
    rightBtn.textContent = answer;
    let j = 1;
    for (let i = 1; i < 5; i++){
        if (i != rightBtnID){
            var wrongBtn = doc.getElementById(i);
            wrongBtn.textContent = arrOptions[j];
            j++;    
            }
        }
    }

/******* action functions ******/

function btnClick(){
    if (this.textContent == answer){
        this.style.backgroundColor = "lightgreen";
        this.style.color = "darkgreen";
        rightSound.play();
        gotItRight();

    } else {
        this.style.backgroundColor = "pink";
        this.style.color = "darkred";
        wrongSound.play();
    }
}

function gotItRight(){
    bottom.style.visibility = 'visible';
}

function nextClicked(){
    location.reload();
}