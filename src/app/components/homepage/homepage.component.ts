import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  niz:number[]=[1,2,3,4,5,6,7,8,9,1,1,1,1];

  ngOnInit(): void {
  }

}
