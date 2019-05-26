(function ($) {
    $(document).ready(function () {
        /*      var video = $('#myvideo').get(0); //get for нативный 
              $('#play').click(function () {
                  if(video.paused || video.ended){
                                video.play();
        $('#play').text('PAUSE');
                  } else {
                     video.pause();
                  $('#play').text('go');                  
                  }
                  
                  
              });

              $('#myvideo').on('ended', function(){
              $('#play').text('go');    
              });
              */
        $('.player').each(function () {
            var player = $(this),
                video = player.find('video'),
                v = video.get(0), //нативный
                play = player.find('#play'),
                start = player.find('#start'),
                progressBar = player.find('.progress'),
                progress = progressBar.find('span');

            play.on('click', function () {
                if (v.paused || v.ended) {
                    v.play();
                    //play.text('PAUSE');
                } else {
                    v.pause();
                    //play.text('PLAY');
                }

            });

            start.on('click', function () {
                v.currentTime = 0;
            });
            video.on('ended pause', function () {

                play.text('PLAY');
            })

            video.on('play', function () {

                play.text('PAUSE');
            })

            video.on('timeupdate', function () {
                progress.css('width', (v.currentTime / v.duration * 100) + '%');

            });
            progressBar.on('click', function (e) {
                console.log((e.originalEvent.pageX - progressBar.offset().left) / progressBar.width() * v.duration);
                /* console.log(e.originalEvent.pageX);
                console.log(progressBar.offset().left);
                 console.log(progressBar.width());
                console.log(v.duration);
            });*/
                v.currentTime = (e.originalEvent.pageX - progressBar.offset().left) / progressBar.width() * v.duration;


            });
        });








    });
})(jQuery);
