var audioPlayer = document.getElementById('audioPlayer');
var progressBar = document.getElementById('progressBar');
var volumeControl = document.getElementById('volumeControl');
var currentSongIndex = 0;
var songs = ['music/Feel Good Inc.mp3.mp3', 'music/On Melancholy Hill.mp3', 'music/Clint Eastwood.mp3', 'music/DARE.mp3', 'music/Rhinestone Eyes.mp3', 'music/Shes My Collar.mp3', 'music/Dirty Harry.mp3', 'music/New Gold.mp3', 'music/19-2000.mp3', 'music/Tormenta.mp3'];

// Update progress bar as the song plays
audioPlayer.addEventListener('timeupdate', function() {
    var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = percentage;
});

// Seek the song when the progress bar is clicked or dragged
progressBar.addEventListener('input', function() {
    var newTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Update volume based on the volume control slider
volumeControl.addEventListener('input', function() {
    audioPlayer.volume = volumeControl.value;
});

// Function to play/pause song
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Function to play selected song
function playSong(song) {
    audioPlayer.src = song;
    audioPlayer.play();
}

// Function to go to the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(songs[currentSongIndex]);
}

// Function to go to the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(songs[currentSongIndex]);
}

// Memutar lagu berikutnya ketika lagu selesai
audioPlayer.addEventListener('ended', () => {
  nextSong();
});

// Mulai dengan lagu pertama
playSong(tracks[currentSongIndex]);