import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InterviewService} from '../../app/services/interview.service';
import { InterviewPage } from '../../pages/interview/interview';
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private interviewService: InterviewService) {
    this.getDefaults();
  }

  getDefaults() {
    // this.category = 'sports';
    // this.limit = 10;
    if(localStorage.getItem('category')!=null){
      this.category=localStorage.getItem('category');
    }else{
      this.category='sports';
    }
    if(localStorage.getItem('limit')!=null){
      this.limit=localStorage.getItem('limit');
    }else{
      this.limit=10;
    }
  }
  setDefaults(){
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    this.navCtrl.push( InterviewPage );
  }
}

