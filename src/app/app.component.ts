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
  onWindowScrolls() {
    if (document.body.scrollTop > 80 ||     
    document.documentElement.scrollTop > 80) {
      document.getElementById('nav')!.classList.add('nav-scroll');
      document.getElementById('logo')!.classList.add('logo-scroll');
      document.getElementById('logos')!.classList.add('logo-scroll');
      document.getElementById('small-nav')!.classList.add('small-nav-scroll');
    }else{
      document.getElementById('nav')!.classList.remove('nav-scroll');
      document.getElementById('logo')!.classList.remove('logo-scroll');
      document.getElementById('logos')!.classList.remove('logo-scroll');
      document.getElementById('small-nav')!.classList.remove('small-nav-scroll');
    }
  }

  showList(){
    document.getElementById('icon1')!.classList.add('hide_icon');
    document.getElementById('icon1')!.classList.remove('show_icon');
    document.getElementById('icon2')!.classList.add('show_icon');
    document.getElementById('icon2')!.classList.remove('hide_icon');
    document.getElementById('list')!.classList.add('list_show');
  }
  hideList(){
    document.getElementById('list')!.classList.remove('list_show');
    document.getElementById('list')!.classList.add('list_hide');
    document.getElementById('icon1')!.classList.add('show_icon');
    document.getElementById('icon1')!.classList.remove('hide_icon');
    document.getElementById('icon2')!.classList.remove('show_icon');
    document.getElementById('icon2')!.classList.add('hide_icon');
  }

}
