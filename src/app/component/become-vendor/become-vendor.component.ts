import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-vendor',
  templateUrl: './become-vendor.component.html',
  styleUrls: ['./become-vendor.component.css']
})
export class BecomeVendorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var homebtn = document.getElementById("homelink");
    homebtn.style.display = 'inline';
  }

}
