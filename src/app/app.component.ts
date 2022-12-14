import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-project';
  @ViewChild('header') header !: ElementRef<HTMLElement>
  @ViewChild('content') content !: ElementRef<HTMLElement>
  @ViewChild('footer') footer !: ElementRef<HTMLElement>
  w: number = window.innerWidth;
  h: number = window.innerHeight;

constructor(private renderer: Renderer2, translate: TranslateService){
  translate.addLangs(['en', 'fr']);
  translate.setDefaultLang('en');
  translate.use('en');
}

ngOnInit(): void {
  
}

setHeaderFooter(){
  this.renderer.setStyle(this.header, 'width', `${this.w}px`);
  this.renderer.setStyle(this.header, 'height', `${this.h}px`)
}

}
