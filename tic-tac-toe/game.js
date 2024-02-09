game = () => {
    let player = 'O';
    let map = new Map();
    const tiles = Array.from(document.getElementsByClassName('grid-item'));
    const winningCombos = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
    ]

    tiles.forEach((item, index) => item.addEventListener('click', function() {
        map.set(index, player);
        item.innerHTML = player;
        item.disabled = true;
        checkForWinners(index);
        player = player === 'O' ? 'X' : 'O';
    }));

    const checkForWinners = index => {
        const filteredCombos = winningCombos.filter(values => values.includes(index));
        for (let combo of filteredCombos) {
            let counter = 0;
            let samePlayer = true;
            let currPlayer = player;
            while (counter < combo.length && samePlayer) {
                if (map.get(combo[counter]) !== currPlayer) {
                    samePlayer = false;
                }
                counter++;
            }
            if (samePlayer) {
                resetGame(currPlayer + ' wins!');
                return true;
            }
        }
        if (tiles.every(item => item.innerHTML)) resetGame('Players tied!');
        return false;
    }

    const resetGame = (message) => {
        if (confirm(message + ' Want to play again?')) {
            tiles.forEach(item => {
                item.disabled = false;
                item.innerHTML = '';
                map = new Map();
            })
        }
        else {
            tiles.forEach(item => item.disabled = true);
            document.querySelector('.result').innerHTML = message;
        }
    }
}

game();