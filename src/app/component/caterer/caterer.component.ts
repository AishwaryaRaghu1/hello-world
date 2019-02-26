import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caterer',
  templateUrl: './caterer.component.html',
  styleUrls: ['./caterer.component.css']
})
export class CatererComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var homebtn = document.getElementById("homelink");
    homebtn.style.display = 'inline';
  }

}
