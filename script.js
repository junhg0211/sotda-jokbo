const jokboMap = {
    '38': '38광땡',
    '18': '18광땡',
    '13': '13광땡',
    'jd': '장땡',
    '9d': '9땡',
    '8d': '8땡',
    '7d': '7땡',
    '6d': '6땡',
    '5d': '5땡',
    '4d': '4땡',
    '3d': '3땡',
    '2d': '2땡',
    '1d': '1땡',
    'al': '알리',
    'a2': '알리',
    'ds': '독사',
    'd4': '독사',
    '9b': '구삥',
    'gb': '구삥',
    'jb': '장삥',
    'js': '장사',
    'j4': '장사',
    'sr': '세륙',
    's6': '세륙',
    'go': '갑오',
    '8g': '8끗',
    '7g': '7끗',
    '6g': '6끗',
    '5g': '5끗',
    '4g': '4끗',
    '3g': '3끗',
    '2g': '2끗',
    '1g': '1끗',
    'mt': '망통',
    'dj': '땡잡이',
    'ah': '암행어사',
    'pt': '파토',
};

const files = [
    "./res/10d.svg",
    "./res/1d.svg",
    "./res/2d.svg",
    "./res/3d.svg",
    "./res/4d.svg",
    "./res/5d.svg",
    "./res/6d.svg",
    "./res/7d.svg",
    "./res/8m.svg",
    "./res/9d.svg",
    "./res/10m.svg",
    "./res/1g.svg",
    "./res/2m.svg",
    "./res/3g.svg",
    "./res/4m.svg",
    "./res/5m.svg",
    "./res/6m.svg",
    "./res/7m.svg",
    "./res/8g.svg",
    "./res/9m.svg",
];

let card1;
let card2;
let nowJokbo;
function createNewJokbo() {
    let numbers = [];
    while (numbers.length < 2) {
        let number = Math.floor(Math.random() * 20);
        if (numbers.indexOf(number) === -1)
            numbers.push(number);
    }
    numbers.sort((a, b) => a - b);

    card1.src = files[numbers[0]];
    card2.src = files[numbers[1]];

    // calculate jokbo
    nowJokbo = calculateJokbo(numbers);
}

function calculateJokbo(numbers) {
    if (numbers[0] == 13 && numbers[1] == 18) {
        return jokboMap['38'];
    } else if (numbers[0] == 4 && numbers[1] == 7
            || numbers[0] == 4 && numbers[1] == 17
            || numbers[0] == 7 && numbers[1] == 14
            || numbers[0] == 14 && numbers[1] == 17) {
        return jokboMap['ah'];
    } else if (numbers[0] == 11 && numbers[1] == 18) {
        return jokboMap['18'];
    } else if (numbers[0] == 11 && numbers[1] == 13) {
        return jokboMap['13'];
    } else if (numbers[0] == 0 && numbers[1] == 10) {
        return jokboMap['jd'];
    } else if (numbers[0] == 4 && numbers[1] == 9
            || numbers[0] == 4 && numbers[1] == 19
            || numbers[0] == 9 && numbers[1] == 14
            || numbers[0] == 14 && numbers[1] == 19) {
        return jokboMap['pt'];
    } else if (numbers[0] == 3 && numbers[1] == 7
            || numbers[0] == 3 && numbers[1] == 17
            || numbers[0] == 7 && numbers[1] == 13
            || numbers[0] == 13 && numbers[1] == 17) {
        return jokboMap['dj'];
    } else if (numbers[0] == 9 && numbers[1] == 19) {
        return jokboMap['9d'];
    } else if (numbers[0] == 8 && numbers[1] == 18) {
        return jokboMap['8d'];
    } else if (numbers[0] == 7 && numbers[1] == 17) {
        return jokboMap['7d'];
    } else if (numbers[0] == 6 && numbers[1] == 16) {
        return jokboMap['6d'];
    } else if (numbers[0] == 5 && numbers[1] == 15) {
        return jokboMap['5d'];
    } else if (numbers[0] == 4 && numbers[1] == 14) {
        return jokboMap['4d'];
    } else if (numbers[0] == 3 && numbers[1] == 13) {
        return jokboMap['3d'];
    } else if (numbers[0] == 2 && numbers[1] == 12) {
        return jokboMap['2d'];
    } else if (numbers[0] == 1 && numbers[1] == 11) {
        return jokboMap['1d'];
    } else if (numbers[0] == 1 && numbers[1] == 2
            || numbers[0] == 1 && numbers[1] == 12
            || numbers[0] == 2 && numbers[1] == 11
            || numbers[0] == 11 && numbers[1] == 12) {
        return jokboMap['al'];
    } else if (numbers[0] == 1 && numbers[1] == 4
            || numbers[0] == 1 && numbers[1] == 14
            || numbers[0] == 4 && numbers[1] == 11
            || numbers[0] == 11 && numbers[1] == 14) {
        return jokboMap['ds'];
    } else if (numbers[0] == 1 && numbers[1] == 9
            || numbers[0] == 1 && numbers[1] == 19
            || numbers[0] == 9 && numbers[1] == 11
            || numbers[0] == 11 && numbers[1] == 19) {
        return jokboMap['gb'];
    } else if (numbers[0] == 0 && numbers[1] == 1
            || numbers[0] == 0 && numbers[1] == 11
            || numbers[0] == 1 && numbers[1] == 10
            || numbers[0] == 10 && numbers[1] == 11) {
        return jokboMap['jb'];
    } else if (numbers[0] == 0 && numbers[1] == 4
            || numbers[0] == 0 && numbers[1] == 14
            || numbers[0] == 4 && numbers[1] == 10
            || numbers[0] == 10 && numbers[1] == 14) {
        return jokboMap['js'];
    } else if (numbers[0] == 4 && numbers[1] == 6
            || numbers[0] == 4 && numbers[1] == 16
            || numbers[0] == 6 && numbers[1] == 14
            || numbers[0] == 14 && numbers[1] == 16) {
        return jokboMap['sr'];
    } else if ((numbers[0] + numbers[1]) % 10 == 9) {
        return jokboMap['go'];
    } else if ((numbers[0] + numbers[1]) % 10 == 8) {
        return jokboMap['8g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 7) {
        return jokboMap['7g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 6) {
        return jokboMap['6g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 5) {
        return jokboMap['5g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 4) {
        return jokboMap['4g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 3) {
        return jokboMap['3g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 2) {
        return jokboMap['2g'];
    } else if ((numbers[0] + numbers[1]) % 10 == 1) {
        return jokboMap['1g'];
    } else {
        return jokboMap['mt'];
    }
}

let focusedTime;
let cardsDiv;
function gotFocus() {
    focusedTime = new Date().getTime();
    cardsDiv.classList.remove('filtered');
}

function lostFocus() {
    cardsDiv.classList.add('filtered');
}

let avgTimeSpan;
let maxTimeSpan;
let minTimeSpan;
let times = [];
function updateInformation() {
    avgTimeSpan.innerText = Math.round(times.reduce((a, b) => a + b, 0) / times.length, 2);
    maxTimeSpan.innerText = Math.round(Math.max(...times), 2);
    minTimeSpan.innerText = Math.round(Math.min(...times), 2);
}

let jokboInput;
let resultSpan;
document.addEventListener('DOMContentLoaded', () => {
    jokboInput = document.querySelector('#input');
    resultSpan = document.querySelector('#result');
    card1 = document.querySelector('#card1');
    card2 = document.querySelector('#card2');
    cardsDiv = document.querySelector('#cards-div');
    avgTimeSpan = document.querySelector('#avg-time');
    maxTimeSpan = document.querySelector('#max-time');
    minTimeSpan = document.querySelector('#min-time');

    createNewJokbo();

    jokboInput.addEventListener('keydown', (e) => {
        if (e.keyCode !== 13)
            return;

        const value = e.target.value;

        let jokboValue = jokboInput.value;
        jokboInput.value = '';
        if (jokboMap[jokboValue] !== nowJokbo)
            return;

        createNewJokbo();

        // timing
        now = new Date().getTime();
        times.push(now - focusedTime);
        focusedTime = now;

        updateInformation();
    });

    jokboInput.addEventListener('keyup', (e) => {
        const value = e.target.value;

        resultSpan.innerText = jokboMap[value] || '-';
    });
});

