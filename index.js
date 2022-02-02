const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('audio');
const playFrwrd = document.querySelector('.next-song');
const playBck = document.querySelector('.previous-song');
const logo = document.querySelector('.logo');
const art = document.querySelector('.art');

let playNum = 0;
let arr = [0, 1]

let playPause = function () {

}



/* playBtn.addEventListener(
	"click",
	() => {
		playBtn.classList.toggle('pause')

		if (playBtn.classList.contains('pause')) {
			playBtn.classList.add("pause");
			audio.play();
		} else {
			playBtn.classList.remove("pause");
			audio.pause();
		}
	},
	false
); */

function toggleBtn() {
	playBtn.classList.toggle('pause');
	if (playBtn.classList.contains('pause')) {
		playBtn.classList.add("pause");
		audio.play();
	} else {
		playBtn.classList.remove("pause");
		audio.pause();
	}

}
playBtn.addEventListener('click', toggleBtn);

function playNext() {
	playNum++
	if (playNum > arr.length - 1) {
		playNum = arr[0]
	}
	audio.src = `assets/audio/${playNum}.mp3`
	audio.play()
	playBtn.classList.add("pause")
	logo.src = `assets/img/${playNum}.png`
	art.src = `assets/img/${playNum}.png`
}

playFrwrd.addEventListener('click', playNext)

function playBack() {
	playNum--
	if (playNum < 0) {
		playNum = arr.length - 1
	}
	audio.src = `assets/audio/${playNum}.mp3`
	audio.play()
	playBtn.classList.add("pause")
	logo.src = `assets/img/${playNum}.png`
	art.src = `assets/img/${playNum}.png`
}

playBck.addEventListener('click', playBack)

