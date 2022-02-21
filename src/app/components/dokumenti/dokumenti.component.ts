import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dokumenti',
  templateUrl: './dokumenti.component.html',
  styleUrls: ['./dokumenti.component.css']
})
export class DokumentiComponent implements OnInit {

  constructor() { }

  niz:number[]=[1,2,3,4,5,6,7,8,9,1,1,1,1];


  ngOnInit(): void {
  }

}
