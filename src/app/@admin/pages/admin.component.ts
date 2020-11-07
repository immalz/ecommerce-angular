import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  toggletValue = true;

  toggled($event) {
    console.log('admin', $event);
    this.toggletValue = $event;
  }

}
