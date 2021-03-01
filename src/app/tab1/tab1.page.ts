import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';
import { ViewVideoPage } from '../view-video/view-video.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) {
  }
  playVideoLocal() {
    this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  async viewVideoMusc() {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/zewyvQEqsS4?autoplay=1&cc_load_policy=1' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

  async viewVideoPokemon() {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/OyhYaWx0MgA?autoplay=1&cc_load_policy=1' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }
  async viewVideoGame() {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/tS8nzAQg_8k?autoplay=1&cc_load_policy=1' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }
  async viewVideoFoot() {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/JZQjuiTRg-k?autoplay=1&cc_load_policy=1' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }
  
  playVideoHosted() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}
