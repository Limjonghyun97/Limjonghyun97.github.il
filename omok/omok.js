const size = 10;
let turn = 1; // player 번호 1,2 변화
let win = 0; // !== 0 일시 승리자 player번호
let click = 0; // === 100 && won === 0 draw

const root = document.getElementById("root");
const map = document.createElement("div");
const map2 = document.createElement("div");
map.setAttribute("class", "map");
map2.setAttribute("class", "map2");

setMap2();
setMap();
function setMap2() {
    for (let i = 0; i < size + 1; i++) {
        for (let j = 0; j < size + 1; j++) {
            const item2 = document.createElement("div");
            item2.setAttribute("class", "box2");

            map2.append(item2);
        }
        root.append(map2);
    }
}

function setMap() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let id = `y${i}x${j}`;
            const item = document.createElement("div");
            item.setAttribute("class", "box");
            item.setAttribute("id", id);

            item.addEventListener("click", e => {
                if (item.innerText === "" && win == 0) {
                    click++;
                    item.innerText = (turn === 1 ? "⚪" : "⚫");

                    winCondition();

                    turn = turn === 1 ? 2 : 1;

                }
            })
            map.append(item);
        }
        root.append(map);
    }
}

function winCondition() {
    checkrow();
    checkcolumn();
    checkdiagonal();
    checkreverse();

    if (win !== 0) {
        alert(`Player${win} WIN!!`);
    }

    if (win === 0 && click === size * size) {
        alert("DRAW !");
    }
}

function checkrow() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${i}x${j}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            if (text === (turn === 1 ? "⚪" : "⚫")) {
                count++;
            } else {
                count = 0;
            }

            if (count == 5) {
                win = turn;
            }
        }
    }
}

function checkcolumn() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${j}x${i}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;

            if (text === (turn === 1 ? "⚪" : "⚫")) {
                count++;
            } else {
                count = 0;
            }

            if (count == 5) {
                win = turn;
            }
        }
    }
}

function checkdiagonal() {
    for (let i = 0; i < size - 4; i++) {
        for (let j = 0; j < size - 4; j++) {
            let count = 0;
            for (let k = 0; k < 5; k++) {
                const target = `y${i + k}x${j + k}`;
                const box = map.querySelector(`#${target}`);
                const text = box.innerText;

                if (text === (turn === 1 ? "⚪" : "⚫")) {
                    count++;
                } else {
                    count = 0;
                }

                if (count == 5) {
                    win = turn;
                }
            }
        }
    }
}

function checkreverse() {
    for (let i = 4; i < size; i++) {
        for (let j = 0; j < size - 4; j++) {
            let count = 0;
            for (let k = 0; k < 5; k++) {
                const target = `y${j + k}x${i - k}`;
                const box = map.querySelector(`#${target}`);
                const text = box.innerText;

                if (text === (turn === 1 ? "⚪" : "⚫")) {
                    count++;
                } else {
                    count = 0;
                }

                if (count == 5) {
                    win = turn;
                }
            }
        }
    }
}

function reset() {
    turn = 1;
    win = 0;
    click = 0;
    location.reload();
}