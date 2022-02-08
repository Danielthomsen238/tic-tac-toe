// Skal nok øve mig i at skrive kommentar frem over :P

let player = "X";
let turn = 0
let pick = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let ai;
let message = document.getElementById('h1')
const box = document.querySelectorAll('div')
roundWon = false
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

box.forEach(item => {
    item.addEventListener('click', function () {
        if (player == "X" && (item.innerHTML != "X" && item.innerHTML != "O") && roundWon == false) {
            item.innerHTML = player;
            player = "O"
            turn++
            CheckWinCondition()
            if(roundWon == false && turn < 9) {
            setTimeout(insane_ai, 250)
            player = "X" 
            turn++
            CheckWinCondition()
             } 
        }
    });
});

function CheckWinCondition () {
    
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = document.getElementById(`box${winCondition[0]}`).innerHTML;
        const b = document.getElementById(`box${winCondition[1]}`).innerHTML;
        const c = document.getElementById(`box${winCondition[2]}`).innerHTML;
        if (a == "X" && b == "X" && c == "X") {
          message.innerHTML = "X is The Winner"
          roundWon = true
          break;
        }
        if (a == "O" && b == "O" && c == "O") {
            message.innerHTML = "O is The Winner"
            roundWon = true
            break;
          }
        if (turn == 9) {
            message.innerHTML = "Its a Tie"
            roundWon = true
        }
      }
}

function aI(items)
{
return items[Math.floor(Math.random()*items.length)];   
}
function aI_choise() {
  ai = document.getElementById(`box${aI(pick)}`)
  console.log(ai)
  if (ai.innerHTML == "X" || ai.innerHTML == "O" ) {
      aI_choise()
  }
}
function insane_ai() {
    for (index = 0; index <= 7; index++) {
        let strategi = winningConditions[index]
        let strategi_1 = document.getElementById(`box${strategi[0]}`)
        let strategi_2 = document.getElementById(`box${strategi[1]}`)
        let strategi_3 = document.getElementById(`box${strategi[2]}`)
        if((strategi_1.innerHTML == "O" && strategi_2.innerHTML == "O") || (strategi_2.innerHTML == "O" && strategi_3.innerHTML == "O") || (strategi_1.innerHTML == "O" && strategi_3.innerHTML == "O"))
        { 
            for (i = 0; i < 3; i++) {
                console.log("insane mode :" + strategi)
               let pick = document.getElementById(`box${strategi[i]}`)
               console.log("choise :" + strategi[i])
                if(pick.innerHTML == "") {
                    pick.innerHTML = "O"
                    return
                }
            }
        }
        
        
        if((strategi_1.innerHTML == "X" && strategi_2.innerHTML == "X") || (strategi_2.innerHTML == "X" && strategi_3.innerHTML == "X") || (strategi_1.innerHTML == "X" && strategi_3.innerHTML == "X"))
        { 
            for (i = 0; i < 3; i++) {
                console.log("insane mode :" + strategi)
               let pick = document.getElementById(`box${strategi[i]}`)
               console.log("choise :" + strategi[i])
                if(pick.innerHTML == "") {
                    pick.innerHTML = "O"
                    return
                }
            }
        }
        }
            aI_choise()
            ai.innerHTML = "O"
    }


    let fruits = [1, 2, 3, 4, 5]
    fruits.splice(2,3)
    
    console.log(fruits)