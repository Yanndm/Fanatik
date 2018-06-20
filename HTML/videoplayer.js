
        var stopButton = document.querySelector ('.stopButton');
        var muteButton = document.querySelector ('.muteButton');
        var volumeButton = document.querySelector ('.volumeButton');
        var progressedTime = document.querySelector ('#progressTime');
        var elapsedTime = document.querySelector ('#passedTime');
        var progress = document.querySelector('.progressBar');
        var fullScreen = document.querySelector('.fullScreen');
        var playButton = document.querySelector ('.playButton');
        var cheatBar = document.querySelector('.cheatBar');


            playControl = function () {
                if (movie.paused) {
                    movie.play();
                    playButton.innerHTML = '<img class="widthButton" src="Ressources/pause.svg">';

                } else {
                    movie.pause();
                    playButton.innerHTML = '<img class="widthButton" src="Ressources/play.svg">';
                }
            };

            stopControl = function () {
                movie.currentTime = 0;
                movie.pause ();
                playButton.innerHTML = '<img class="widthButton" src="Ressources/play.svg">';
            };

            var previousVolume;
            volumeMute = function() {
                if (movie.volume > 0) {
                    previousVolume = movie.volume;
                    movie.volume = 0;
                    muteButton.innerHTML = '<img class="widthButton muteButton" src="Ressources/mute.svg">';
                    volumeButton.value = 0;

                } else {
                    movie.volume = previousVolume;
                    muteButton.innerHTML = '';
                    muteButton.innerHTML = '<img class="widthButton muteButton" src="Ressources/speaker.svg">';
                    volumeButton.value = movie.volume*100;
                }
            };

            fullscreen = function() {
                var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
                    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
                    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
                    (document.msFullscreenElement && document.msFullscreenElement !== null);

                var docElm = document.documentElement;
                if (!isInFullScreen) {
                    if (docElm.requestFullscreen) {
                        movie.requestFullscreen();
                    } else if (docElm.mozRequestFullScreen) {
                        movie.mozRequestFullScreen();
                    } else if (docElm.webkitRequestFullScreen) {
                        movie.webkitRequestFullScreen();
                    } else if (docElm.msRequestFullscreen) {
                        movie.msRequestFullscreen();
                    }
                } else {
                    if (document.exitFullscreen) {
                        movie.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        movie.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        movie.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        movie.msExitFullscreen();
                    }
                }

            };


        update = function() {
             timeProgress();

         };




         timeProgress = function() {
             var duration = movie.duration;
             var time = movie.currentTime;
             var restingTime = duration - time;
             progressedTime.textContent = formatTime(time);
             elapsedTime.textContent = formatTime(restingTime);
             console.log(elapsedTime.textContent)

             progress.value = movie.currentTime / movie.duration * 100;
             cheatBar.style.width = progress.value + '%';
         };

        progress.addEventListener('input', function() {
            movie.currentTime = progress.value * movie.duration / 100;
        });



        formatTime = function(time) {


             var hours = Math.floor(time / 3600);
             var mins = Math.floor((time % 3600) / 60);
             var secs = Math.floor(time % 60);

             if (secs < 10) {
                 secs = "0" + secs;
             }

             if (hours) {
                 if (mins < 10) {
                     mins = "0" + mins;
                 }

                 return hours + ":" + mins + ":" + secs; // hh:mm:ss
             } else {
                 return mins + ":" + secs; // mm:ss
             }
         };





        playButton.addEventListener('click',function(){
            playControl();
        });




        window.addEventListener('keypress',function(event){
            if (event.which === 32){
                playControl();
            }
        });

        stopButton.addEventListener('click',function(){
            stopControl();
        });

        muteButton.addEventListener('click',function(){
            volumeMute();
        });

        progress.value=0;

        volumeButton.addEventListener('input',function(){
            movie.volume = volumeButton.value /100;
        });

        fullScreen.addEventListener('click',function(){
            fullscreen();
        });
        
