import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-com-a',
  templateUrl: './com-a.component.html',
  styleUrls: ['./com-a.component.css']
})
export class ComAComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

}
