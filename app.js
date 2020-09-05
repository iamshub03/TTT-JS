const container = document.querySelector('.container');
let intro = 1;
let arr = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
container.addEventListener('click', function(event) {
    const contID = event.target.parentNode.id;
    if (contID !== '') {
        let box = document.getElementById(contID);
        let contIDS = contID.split('-');
        if (intro <= 9) {
            if (intro % 2 !== 0 || intro === 1) {
                box.firstChild.src = 'cross.png';
                arr[contIDS[1]] = 1;
                if ((arr[1] === arr[2] && arr[2] === arr[3]) || (arr[4] === arr[5] && arr[5] === arr[6]) || (arr[7] === arr[8] && arr[8] === arr[9]) || (arr[1] === arr[4] && arr[4] === arr[7]) || (arr[2] === arr[5] && arr[5] === arr[8]) || (arr[3] === arr[6] && arr[6] === arr[9]) || (arr[1] === arr[5] && arr[5] === arr[9]) || (arr[3] === arr[5] && arr[5] === arr[7])) {
                    console.log('Player1 Winner');
                    document.querySelector('.boxes').style.display = 'none';
                    let coIn = document.querySelector('.container');
                    coIn.insertAdjacentHTML('afterbegin', '<h2>Player 1 Won, Refresh To play Again!</h2><button class="btn" onClick="window.location.reload();">Replay</button>');
                }
                document.getElementById(contID).removeAttribute('id');
                intro++;
                if (intro > 9) {
                    document.querySelector('.drawBtn').insertAdjacentHTML('beforebegin', '<h2>Match Draw!</h2><button class="btn" onClick="window.location.reload();">Replay</button>');
                }
            } else {
                box.firstChild.src = 'circle.png';
                arr[contIDS[1]] = 0;

                if ((arr[1] === arr[2] && arr[2] === arr[3]) || (arr[4] === arr[5] && arr[5] === arr[6]) || (arr[7] === arr[8] && arr[8] === arr[9]) || (arr[1] === arr[4] && arr[4] === arr[7]) || (arr[2] === arr[5] && arr[5] === arr[8]) || (arr[3] === arr[6] && arr[6] === arr[9]) || (arr[1] === arr[5] && arr[5] === arr[9]) || (arr[3] === arr[5] && arr[5] === arr[7])) {
                    console.log('Player2 Winner');
                    document.querySelector('.boxes').style.display = 'none';
                    let coIn = document.querySelector('.container');
                    coIn.insertAdjacentHTML('afterbegin', '<h2>Player 2 Won, Refresh To play Again!</h2><button class="btn" onClick="window.location.reload();">Replay</button>');
                }
                document.getElementById(contID).removeAttribute('id');
                intro++;
                if (intro > 9) {
                    document.querySelector('.drawBtn').insertAdjacentHTML('beforebegin', '<h2>Match Draw!</h2><button class="btn" onClick="window.location.reload();">Replay</button>');
                }
            }
        }
    }
});
