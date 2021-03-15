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
    },
    {
      name: 'la danse des dinausaurs',
      path: './assets/mp3/la-danse-des-dinosaures-gipsy-bebe-requin-comptine-par-little-angel-francais.mp3'
    },
    {
      name: 'bouboukalakala',
      path: './assets/mp3/bouboukalakala-comptine-dafrique-pour-les-petits-avec-paroles.mp3'
    },
    {
      name: 'ah les crocodiles',
      path: './assets/mp3/ah-les-crocodiles.mp3'
    },
    {
      name: 'pirouette cacahuete il etait un petit homme',
      path: './assets/mp3/pirouette-cacahuete-il-etait-un-petit-homme.mp3'
    },
    {
      name: 'promenons nous dans les bois',
      path: './assets/mp3/promenons-nous-dans-les-bois.mp3'
    },
    {
      name: 'ilona un monde arfait',
      path: './assets/mp3/ilona-un-monde-parfait.mp3'
    },
    {
      name: 'un elephant qui se balancait',
      path: './assets/mp3/un-elephant-qui-se-balancait.mp3'
    },
    {
      name: 'le poussin piou',
      path: './assets/mp3/le-poussin-piou.mp3'
    },
    {
      name: 'rene la taupe mignon mignon',
      path: './assets/mp3/rene-la-taupe-mignon-mignon-clip-officiel.mp3'
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
