import { Component, OnInit } from '@angular/core';

import {Router, Routes} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

username: string = "";
password: string = "";

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'ADMIN' && this.password == 'ADMIN'){
     this.router.navigate(["HomeComponent"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }
