const character = document.getElementById('character');
const block = document.getElementById('block');
const play = document.getElementById('playbutton');
const showscore = document.getElementById('score');
const instruktioner = document.getElementById('instruktioner');
var scoreNumber;
var scoreCounted;

play.addEventListener('click', () => {
    block.classList.add('block-move');
    play.classList.add('hidden');
    instruktioner.classList.add('hidden');
    scoreNumber = 0;
});

function jump() {
    if (character.classList != 'character-jump') {
        character.classList.add('character-jump');
        scoreCounted = false;
    }
    setTimeout(function() {
        character.classList.remove('character-jump');
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.classList.remove('block-move');
        block.classList.remove('block-move-2');
        block.classList.remove('block-move-3');
        block.classList.remove('block-move-4');
        block.classList.remove('block-move-5');
        block.classList.remove('block-move-6');
        play.classList.remove('hidden');
        instruktioner.classList.remove('hidden');
        alert('Jävla sopa! Du dog! Du fick ' + scoreNumber + ' poäng!')
        showscore.innerHTML = 0;
    }
}, 10);

function speedup() {
    if (scoreNumber > 10 && scoreNumber < 20) {
        block.classList.remove('block-move');
        setTimeout(function() {
        block.classList.add('block-move-2');
        },500)
    }
    if (scoreNumber >= 20 && scoreNumber < 30) {
        block.classList.remove('block-move-2');
        setTimeout(function() {
        block.classList.add('block-move-3');
        },500)
    }
    if (scoreNumber >= 30 && scoreNumber < 40) {
        block.classList.remove('block-move-3');
        setTimeout(function() {
        block.classList.add('block-move-4');
        },500)
    }
    if (scoreNumber >= 40 && scoreNumber < 50) {
        block.classList.remove('block-move-4');
        setTimeout(function() {
        block.classList.add('block-move-5');
        },500)
    }
    if (scoreNumber >= 50) {
        block.classList.remove('block-move-5');
        setTimeout(function() {
        block.classList.add('block-move-6');
        },500)
    }
};

function score() {
    scoreNumber++;
    showscore.innerHTML = scoreNumber;
    speedup();
};

var checkScore = setInterval(function() {
    var blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && scoreCounted == false) {
        score();
        scoreCounted = true;
    }
}, 10);