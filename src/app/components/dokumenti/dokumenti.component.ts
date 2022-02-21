import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dokumenti',
  templateUrl: './dokumenti.component.html',
  styleUrls: ['./dokumenti.component.css']
})
export class DokumentiComponent implements OnInit {

  constructor() { }

  active:string='';

  toggleActiveClass():string{
    this.active==''?this.active='active':this.active='';
    return this.active;
  }

  ngOnInit(): void {
  }

}
