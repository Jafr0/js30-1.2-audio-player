const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('audio');
const playFrwrd = document.querySelector('.next-song');
const playBck = document.querySelector('.previous-song');
const logo = document.querySelector('.logo');
const art = document.querySelector('.art');
const artist = document.querySelector('.song-artist');
const song = document.querySelector('.song-title');
const player = document.querySelector(".container");
let playtime = 0;
let arr = [0, 1]




function toggleBtn() {
	playBtn.classList.toggle('pause');
	if (playBtn.classList.contains('pause')) {
		playBtn.classList.add("pause");
		audio.play();
		logo.classList.add('scale')
	} else {
		playBtn.classList.remove("pause");
		audio.pause();
		logo.classList.remove('scale')
	}

}
playBtn.addEventListener('click', toggleBtn);


function playNext() {
	playtime++
	if (playtime > arr.length - 1) {
		playtime = arr[0]

	}
	audio.src = `assets/audio/${playtime}.mp3`
	audio.play()
	playBtn.classList.add("pause")
	logo.src = `assets/img/${playtime}.png`
	art.src = `assets/img/${playtime}.png`
	logo.classList.add('scale')
	if (`assets/img/${playtime}.png` === `assets/img/1.png`) {
		artist.textContent = "Beyonce"
		song.textContent = "Don't Hurt Yourself"
	}
	else {
		artist.textContent = "Dua Lipa"
		song.textContent = "Don't Start Now"
	}

}
playFrwrd.addEventListener('click', playNext)

function playBack() {
	playtime--
	if (playtime < 0) {
		playtime = arr.length - 1

	}
	audio.src = `assets/audio/${playtime}.mp3`
	audio.play()
	playBtn.classList.add("pause")
	logo.src = `assets/img/${playtime}.png`
	art.src = `assets/img/${playtime}.png`
	logo.classList.add('scale')
	if (`assets/img/${playtime}.png` === `assets/img/1.png`) {
		artist.textContent = "Beyonce"
		song.textContent = "Don't Hurt Yourself"
	}
	else {
		artist.textContent = "Dua Lipa"
		song.textContent = "Don't Start Now"
	}

}
playBck.addEventListener('click', playBack)


audio.addEventListener(
	"loadeddata",
	() => {
		player.querySelector(".time .length").textContent = timeCode(
			audio.duration
		);

	},

);

const timeline = player.querySelector(".timeline");
timeline.addEventListener("click", chunk => {
	const widthTime = window.getComputedStyle(timeline).width;
	const osttime = chunk.offsetX / parseInt(widthTime) * audio.duration;
	audio.currentTime = osttime;
});


setInterval(() => {
	const progressBar = player.querySelector(".progress");
	progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
	player.querySelector(".time .current-time").textContent = timeCode(
		audio.currentTime
	);
});

function timeCode(time) {
	let seconds = parseInt(time);
	let minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	const hours = parseInt(minutes / 60);
	minutes -= hours * 60;

	if (hours === 0) {
		return `${minutes}:${String(seconds % 60).padStart(2, 0)}`
	};
	return `${String(hours).padStart(2, 0)}:${minutes}:${String(
		seconds % 60
	).padStart(2, 0)}`;
}

console.log("Самооценка в 60 баллов \nВёрстка +10 \nКнопка Play/Pause +10\nПри кликах по кнопкам Вперед-Назад +10 \nПри смене аудиотрека меняется изображение +10 \nПрогресс-бар +10\nОтображается продолжительность аудиотрек +10")