import { Component, OnInit,HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pisumfoods';
  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 80 ||     
    document.documentElement.scrollTop > 80) {
      document.getElementById('nav')!.classList.add('nav-scroll');
      document.getElementById('logo')!.classList.add('logo-scroll');
    }else{
      document.getElementById('nav')!.classList.remove('nav-scroll');
      document.getElementById('logo')!.classList.remove('logo-scroll');
    }
  }
}
