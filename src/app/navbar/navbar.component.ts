import { TranslateService } from '@ngx-translate/core';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
lang:any;
dateToday: number = Date.now();
  changelang(lang:any){

    localStorage.setItem('lang',lang.value);
    this.translateService.use(lang.value);
    location.reload();
  }


  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {
    this.lang= localStorage.getItem('lang') ||'en';
  }

}
