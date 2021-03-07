import { Howl } from 'howler';
import { Component } from '@angular/core';

export interface Track{
  name: string;
  path: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  playlist: Track[]=[
    {
      name: 'Ben Ten',
      path: './assets/mp3/ben-ten.mp3'
    }
  ];


  activeTrack: Track= null;
  player: Howl = null;
  isPlaying=false;
  constructor() {}

  start(track: Track){
    console.log('onPlay');

    if(this.player){this.player.stop();}
    this.player = new Howl({
      src: [track.path],
      onplay:()=>{
        console.log('onPlay');
        this.isPlaying=true;
        this.activeTrack=track;},
      onend: () =>{
        console.log('onStopped');
      }
    });
    this.player.play();
  }

  togglePlayer(pause){
    this.isPlaying= !pause;
    if(pause){this.player.pause();}
    else{this.player.play();}
  }

  next(){
    let index = this.playlist.indexOf(this.activeTrack);
    if(index!=this.playlist.length -1){this.start(this.playlist[index + 1])}
    else{this.start(this.playlist[0]);}
  }
  

  prev(){
    let index = this.playlist.indexOf(this.activeTrack);
    if(index>0){this.start(this.playlist[index - 1])}
    else{this.start(this.playlist[this.playlist.length -1]);}
  }
  seek(){}
  updateProgress(){}
}
