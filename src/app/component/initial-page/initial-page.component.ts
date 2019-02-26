import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})

export class InitialPageComponent implements OnInit 
{
  firstname : string;
  lastname : string;
  email : string;
  password : string;
  phone : string;
  str : string;

  error_msg_fname : string;
  error_msg_lname : string;
  error_msg_email : string;
  error_msg_pwd : string;
  error_msg_phone : string;
  
  constructor(private _registerService : RegistrationServiceService) { }

  ngOnInit() {
    var homebtn = document.getElementById("homelink");
    homebtn.style.display = 'none';
  }

  checkPassword(password:string){
    if(password.length < 8 )
    {
      window.alert("Minimum Length should be 8.");
    }
  }

  userRegister()
  {  
      console.log(this.firstname+" "+this.lastname+" "+this.email+" "+this.password+" "+this.phone);

      if(this.firstname != undefined && this.lastname != undefined && this.email != undefined
        && this.password != undefined && this.phone != undefined)
      {
        this.str = JSON.stringify({ "firstname":this.firstname , "lastname":this.lastname, "email":this.email, "password":this.password, "phone":this.phone});
        console.log(JSON.parse(this.str.toString()));
        this._registerService.registerUser(this.str);
      }
      else if(this.firstname == undefined && this.lastname == undefined && this.email == undefined
        && this.password == undefined && this.phone == undefined){
        console.log('error has occured');
        window.alert("Please Fill all data");
      }
      else if(this.firstname == undefined){
        this.error_msg_fname = "Please specify your First Name";
      }
      else if(this.lastname == undefined){
        this.error_msg_lname = "Please specify your Last Name";
      }
      else if(this.email == undefined){
        this.error_msg_email = "Please mension E-mail id";
      }
      else if(this.password == undefined){
        this.error_msg_pwd = "Please enter the Password";
      }
      else if(this.phone == undefined){
        this.error_msg_phone = "Please mension the contact number";
      }
      
  }

}
