var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $result = document.querySelector('#result');
var $gameTime = document.querySelector('#game-time');

var score = 0;
var isGameStarter = false;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime)

function show($el) {
	$el.classList.remove('hide');
}

function hide($el) {
	$el.classList.add('hide');
}

function startGame() {
	score = 0;
	setGameTime();
	$gameTime.setAttribute('disabled', 'true');
	isGameStarter = true;
	hide($start); //hide button
	$game.style.backgroundColor = '#fff' //painting a block with a game in white

	var interval = setInterval(function(){
		var time = parseFloat($time.textContent);

		if(time <= 0) {
			clearInterval(interval);
			endGame();
		} else {
			$time.textContent = (time - 0.1).toFixed(1);
		}
	}, 100);

	renderBox();
}

function setGameScore() {
	$result.textContent = score.toString();
}

function setGameTime() {
	var time = +$gameTime.value;
	$time.textContent = time.toFixed(1);
	show($timeHeader);
	hide($resultHeader);
}

function endGame(){
	isGameStarter = false;
	setGameScore();
	$gameTime.removeAttribute('disabled', 'false');
	show($start);
	game.innerHTML = '';
	$game.style.backgroundColor = '#ccc';
	hide($timeHeader);
	show($resultHeader);

	setGameScore();
}

function handleBoxClick(e){
	if(!isGameStarter){
		return;
	}

	if(e.target.dataset.box) {
		score++;
		renderBox();
	}
}

function renderBox() {
	$game.innerHTML = '';
	var box = document.createElement('div'); 
	var boxSize = getRandom(30, 100);
	var gameSize = $game.getBoundingClientRect();
	var maxTop = gameSize.height - boxSize;
	var maxLeft = gameSize.width - boxSize;
	var colorRandom = getRandomColor();

	box.style.height = box.style.width = boxSize + 'px';
	box.style.position = 'absolute';
	box.style.top = getRandom(0, maxTop) + 'px';
	box.style.left = getRandom(0, maxLeft) + 'px';
	box.style.backgroundColor = colorRandom;
	box.style.cursor = 'pointer';
	box.setAttribute('data-box', 'true');

	$game.insertAdjacentElement('afterbegin', box);
} // random square function

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
} // random size for square

function getRandomColor() {
	return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
} // random color in the hex system
