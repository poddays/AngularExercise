import { Component,OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showEventOrder = new EventEmitter<void>()
  @Output() showEventUser = new EventEmitter<void>()
  
  constructor() { }

  ngOnInit(): void {
  }
  showOrderEvent() {
    this.showEventOrder.emit();
  }
  showUserEvent() {
    this.showEventUser.emit();
  }

}
