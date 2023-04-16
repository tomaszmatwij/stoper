const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const history = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const info = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
let minutes = 0
let seconds = 0
const timeArr = []
let myTimer
let id = 1
const startStoper = () => {
	clearInterval(myTimer)
	const addSec = () => {
		seconds++

		if (seconds < 10) {
			stopWatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds < 60) {
			stopWatch.textContent = `${minutes}:${seconds}`
		} else {
			seconds = 0
			minutes++
			stopWatch.textContent = `${minutes}:0${seconds}`
		}
	}
	myTimer = setInterval(addSec, 200)
}
const pauseStoper = () => {
	clearInterval(myTimer)
}
const stopStoper = () => {
	if (stopWatch !== '0:00') {
		time.style.visibility = 'visible'
		time.textContent = `ostatni czas to: ${stopWatch.textContent}`
		timeArr.push(stopWatch.textContent)
	}

	clearStuff()
}

const showHistory = () => {
	timeList.classList.toggle('show')

	createHistory()
}
const timesReset = () => {
	clearStuff()
	time.style.visibility = 'hidden'
	timeList.textContent = ''
	timeArr.length = 0
}
const createHistory = () => {
	let i = 1
	timeList.textContent = ''
	timeArr.forEach(element => {
		const result = document.createElement('li')
		const timeID = document.createElement('p')
		const timeResult = document.createElement('span')
		timeID.textContent = `czas pomiaru ${i}:`
		timeResult.textContent = element
		timeList.append(result)
		result.append(timeID, timeResult)
		i++
	})
}

const clearStuff = () => {
	clearInterval(myTimer)

	minutes = 0
	seconds = 0
	stopWatch.textContent = `0:00`
}
const modalShow = e => {
	if (!(modalShadow.style.display == 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.toggle('modal-animation')
}
// const closeModal = () => {
// 	modalShadow.style.display = 'none'
// 	modalShadow.classList.remove('modal-animation')
// }

start.addEventListener('click', startStoper)
pause.addEventListener('click', pauseStoper)
stop.addEventListener('click', stopStoper)
reset.addEventListener('click', timesReset)
history.addEventListener('click', showHistory)
info.addEventListener('click', modalShow)
closeModalBtn.addEventListener('click', modalShow)
window.addEventListener('click', e => (e.target === modalShadow ? modalShow() : false))
