import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-solution',
  templateUrl: './corporate-solution.component.html',
  styleUrls: ['./corporate-solution.component.css']
})
export class CorporateSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var homebtn = document.getElementById("homelink");
    homebtn.style.display = 'inline';
  }

}
