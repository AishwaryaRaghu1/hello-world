import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  public catererInfo;

  constructor() { }

  ngOnInit() {
    this.catererInfo = localStorage.getItem('catererinfo');
    this.catererInfo = JSON.parse(this.catererInfo);
    console.log("Menu page information");
    console.log(this.catererInfo);
  }
}
