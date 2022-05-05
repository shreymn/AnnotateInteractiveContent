player.on('timeUpdate', function(event) {
	// currentTime (seconds, float) is exposed as event.data.currentTime
	var currentTime = event.data.currentTime;
	var time = convertTimeStamp(currentTime);
	// your algorithm will be called here with the currentTime as the argument
	handleAnnotations(time);
});

function handleAnnotations(currentTime) {  
	for (var i = 0; i < tracks.length; i++) {
		for (var j = 0; j < tracks[i].length; j++) {
			var currentAnnotationStartTime = convertTimeStamp(tracks[i][j].startTime);
			var currentAnnotationEndTime = convertTimeStamp(tracks[i][j].endTime);
			if (currentTime >= currentAnnotationStartTime && currentTime < currentAnnotationEndTime) {
				tracks[i][j].show;
			} else {
				tracks[i][j].hide;
			}
		}
	}
}

function convertTimeStamp(time) {
	var hours = Math.floor(time / 60 / 60);
	var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
	var hourValue = hours.toString().padStart(2, '0');
	var minuteValue = minutes.toString().padStart(2, '0');
    var secondValue = seconds.toString().padStart(2, '0');

    var mediaTime = `${hourValue}:${minuteValue}:${secondValue}`;
	return mediaTime;
}
