import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  showUD:boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }
  showUserDetail(){
    this.showUD = !this.showUD
  }

}
