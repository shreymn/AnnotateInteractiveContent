player.on('timeUpdate', function(event) {
	// currentTime (seconds, float) is exposed as event.data.currentTime
	var currentTime = event.data.currentTime;
	// your algorithm will be called here with the currentTime as the argument
	var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime - minutes * 60);
	const minuteValue = minutes.toString().padStart(2, '0');
    const secondValue = seconds.toString().padStart(2, '0');

    const mediaTime = `${minuteValue}:${secondValue}`;
});

function handleSubtitles(currentTime) {
  // If there is an active subtitle and it should be hidden
  if (activeSubtitle !== null && (currentTime >= subtitles[activeSubtitle].end || currentTime < subtitles[activeSubtitle].start)) {
    subtitleDisplay.innerText = ''; // Hide subtitle
    activeSubtitle = null;
  }

  // If there is no active subtitle
  if (activeSubtitle === null) {
    for (var i = 0; i < subtitleCount; i++) {
      if (currentTime >= subtitles[i].start && currentTime < subtitles[i].end) {
        subtitleDisplay.innerText = subtitles[i].text; // Show subtitle
        activeSubtitle = i;
        break;
      }
    }
  }
}