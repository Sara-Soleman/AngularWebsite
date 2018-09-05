import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'name';
  sum = 0;
  q1 = 0;
  q2 = 0;
  q3 = 0;
  msg = '';
  startGame: boolean;
  showResults: boolean;
  constructor() {
      this.startGame = true;
      this.showResults = false;

  }
  ShowButton() {
      this.startGame = false;
  }

  setName(n){
this.name = n;
  }
  answer1(q){
if (q == 105){
  this.q1 = 1;
}
  }

  answer2(q){
    if (q == 25){
      this.q2 = 1;
    }
      }
      answer3(q){
        if (q == 13){
          this.q3 =  1;
        }
          }


  calcValue(){
  this.sum = this.q1 + this.q2 + this.q3 ;
  if(this.sum == 3){
   this.msg = 'Congratulation '+ this.name +' you did a great gob.'
  }else{
    this.msg = 'its okay '+ this.name +' you just need to try again.'
  }
  this.showResults = true;
  }


}
