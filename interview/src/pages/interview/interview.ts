import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InterviewService} from '../../app/services/interview.service';
import {DetailsPage} from '../../pages/details/details';
@Component({
  selector: 'interview',
  templateUrl: 'interview.html'
})
export class InterviewPage {
  items:any;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController,private interviewService:InterviewService) {
   this.getDefaults();
  }
  ngOnInit(){
   // console.log('onInit ran');

    this.getPosts(this.category,this.limit);
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
  getPosts(category,limit){
this.interviewService.getPosts(category,limit).subscribe(
  response=>{
 ///   console.log(response);
    this.items=response.data.children;
  }
)

    }
  viewItem(item){
    this.navCtrl.push(DetailsPage,{
      item:item
    });
  }
  changeCategory(){
    this.getPosts(this.category,this.limit);
  }

}
