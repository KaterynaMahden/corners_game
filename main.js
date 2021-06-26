function drawChess() {
    let mainBlock = document.querySelector('.main_block');
    let block;
    let mark = true;


    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++) {

            if (j === 0) mark = !mark;
            block = document.createElement('div')

            if (mark) block.className = 'light_pink block';

            else block.className = 'dark_pink block';

            if (i <= 2 && j >= 5) {
                let chess = document.createElement('div');
                chess.className = 'dark_chess';
                block.appendChild(chess);
            }

            if (j <= 2 && i >= 5) {
                let chess = document.createElement('div');
                chess.className = 'light_chess';
                block.appendChild(chess);
            }

            block.dataset.x = i.toString();
            block.dataset.y = j.toString();
            block.onclick = chessHandler;
            mainBlock.appendChild(block);
            mark = !mark;
        }
    }
}

let activeBlock = null;
const {max, abs} = Math;

function isMoveValid(currentBlock) {
    const currentPositionX = activeBlock.dataset.x;
    const currentPositionY = activeBlock.dataset.y;
    const newPositionX = currentBlock.dataset.x;
    const newPositionY = currentBlock.dataset.y;
    if (currentPositionX === newPositionX || currentPositionY === newPositionY) {
        return max(abs(newPositionX - currentPositionX), abs(newPositionY - currentPositionY)) === 1;
    }

}


let leftCorner = [['5', '0'], ['5', '1'], ['5', '2'], ['6', '0'], ['6', '1'], ['6,2'], ['7,0'], ['7,1'], ['7,2']];
let rightCorner = [['0', '5'], ['1', '5'], ['2', '5'], ['0', '6'], ['1,6'], ['2', '6'], ['0', '7'], ['1', '7'], ['2', '7']];

function checkForWinner() {     //<===== незавершена функція,яка проводить перевірку на переможця :(
    const lightElements = document.getElementsByClassName("light_chess");
    const darkElements = document.getElementsByClassName("dark_chess");
    let lightWon = false;
    let darkWon = false;
    let point;
    let point2;

    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++) {

            if (i <= 2 && j >= 5) {
                // point = [lightElements[i].parentElement.dataset("data-y")];
                // point2 = [lightElements[i].parentElement.dataset("data-x")];
                // console.log(point);
                 if (document.querySelector(rightCorner).classList.contains('darkElements')){
                    lightWon = false;
                }

                if (lightWon) {

                    alert("Light won!")
                }
            }
        }
    }


    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++) {
            if (j <= 2 && i >= 5) {

                // point = [darkElements[i].parentElement.dataset('data-y')];
                // point2 = [darkElements[i].parentElement.dataset("data-x")]
                //let element = document.getElementsByClassName('light_pink');
                if (document.querySelector(leftCorner).classList.contains('lightElements')) {



                    darkWon = false;
                }

                if (darkWon) {
                    alert("Light won!")
                }
            }
        }
    }


}


// function whoseTurn(){
//
//
// }


function chessHandler() {
    const isChecked = this.hasChildNodes()
    if (isChecked && !activeBlock) {
        activeBlock = this;
    } else if (!isChecked && activeBlock && isMoveValid(this)) {
        this.appendChild(activeBlock.childNodes[0]);
        activeBlock = null;
    } else if (activeBlock) {
        if (!isMoveValid(this) || isChecked) {
            activeBlock = null;

        }
    }
}

drawChess();
checkForWinner();

