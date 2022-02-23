import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  niz:number[]=[1,2,3,4,5,6,7,8,9,1,1,1,1];
  url:string="https://localhost:44350/Obavijest/GetAllObavijesti";
  obavijesti:any='';

  getObavijesti(){
    this.httpClient.get(this.url).subscribe( x => this.obavijesti=x );
  }


  ngOnInit(): void {
    this.getObavijesti();
  }

}
