# AnnotateInteractiveContent
The approach was simple considering the time constraints. The current version may not be scalable. 
- On every time update, the logic retrieves and formats the time based on hours:minutes:seconds.
- This currentTime is passed into the handleAnnotations function.
- The HandleAnnotations function loops through each track and each annotation within the track
- Based on the currenttime, starttime and end time of the annotation, the show/ hide function is invoked.
