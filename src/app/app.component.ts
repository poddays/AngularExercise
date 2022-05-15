import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showOrderContainer:boolean = true;
  showUserContainer:boolean = false;
  
  showOrder() {
   if (this.showUserContainer=== true) {
    this.showUserContainer = false
    this.showOrderContainer = true
   }else{
    this.showOrderContainer = true
   }
  }

  showUser(){
    if (this.showOrderContainer=== true) {
      this.showOrderContainer = false
      this.showUserContainer = true
     }else{
      this.showUserContainer = true
     }
  }

  title = 'esercizi';
}

