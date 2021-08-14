import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OS-Task';
  
  constructor( private translateService:TranslateService){
     this.translateService.setDefaultLang('en');
     this.translateService.addLangs(['en', 'ar'])
     this.translateService.use(localStorage.getItem('lang') || 'en')
  }

}
