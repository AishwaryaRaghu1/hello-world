import { Component, OnInit } from '@angular/core';
import { CaterersListService } from 'src/app/services/caterers-list.service';

@Component({
  selector: 'app-find-caterer',
  templateUrl: './find-caterer.component.html',
  styleUrls: ['./find-caterer.component.css']
})
export class FindCatererComponent implements OnInit {

  public caterers = [];
  public catererDatail:any;

  constructor(private _caterersService: CaterersListService) { }

  ngOnInit() {
    var homebtn = document.getElementById("homelink");
    homebtn.style.display = 'inline';
    
    this._caterersService.getCaterersData()
        .subscribe(data => this.caterers = data);
  }

  dispalyMenu(caterer: any){
    var menuDetail = JSON.stringify(caterer);
    console.log(menuDetail);
    localStorage.setItem('catererinfo',menuDetail);
    window.open("menupage",'_self');
  }
}
