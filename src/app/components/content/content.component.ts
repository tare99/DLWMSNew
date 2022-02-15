import { Component, OnInit } from '@angular/core';
import{HomepageComponent} from "../homepage/homepage.component";

@Component({
  selector: 'app-content',
  styleUrls: ['./content.component.css'],
  template:'<div><router-outlet></router-outlet></div>'
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
