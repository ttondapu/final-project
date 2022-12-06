var video;

// load page
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById("video")
	video.autoplay=false
	video.loop = false
	video.load();
})

// play button
document.querySelector("#play").addEventListener("click", function() {
	video = document.getElementById("video")
	if (!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)){
		video.pause()
		document.getElementById("play").innerHTML = "Play"
	}
	else {
		video.play()
		document.getElementById("play").innerHTML = "Pause"
	}
})

// mute
document.querySelector("#mute").addEventListener("click", function() {
	video = document.getElementById("video")
	if (!video.muted) {
		video.muted = true
		document.getElementById("mute").innerHTML = "nmute"
	}
	else {
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}
})