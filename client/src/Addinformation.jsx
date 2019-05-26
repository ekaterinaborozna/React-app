
import React from 'react';
import Video from './Video';

class Addinformation extends React.Component {   
/*    componentWillUnmount = () => {
          this.pauseVideo();
      };
      playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
      };

      pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
      };*/

/*clickHandler(e) {
var audio = $('#audio');
                    audio.play();
   
             
} */
    
   /* $('.player').each(function () {
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
            
                v.currentTime = (e.originalEvent.pageX - progressBar.offset().left) / progressBar.width() * v.duration;


            });
        });*/

    
    

    
        
	render() {
 
      
        

		return ( <div> 
         
            <div id="addinfo">
                <p>
                 <strong>Name</strong>: Светлана
                </p>
                <p>
                 <strong>Duration</strong>: 0:50
                </p>
                <p>
                 <strong>Result of communication</strong>: 100
                </p>
            </div>  
          
        <div>
          <Video />  
            
        </div>
           	
		
		</div> );
	}
}

export default Addinformation;

