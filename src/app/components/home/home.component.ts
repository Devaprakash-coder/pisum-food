import { Component, OnInit,HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startIndex = 0;
  Imagedata = [
  "assets/images/slider-3.jpg",
  "assets/images/slider-2.jpg",
  "assets/images/slider-1.jpg",
  ]
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.Repeat();
  }
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 600 ||     
    document.documentElement.scrollTop > 600) {
      document.getElementById('scroll')!.classList.add('scroll-up');
    }else{
      document.getElementById('scroll')!.classList.remove('scroll-up');
    }
    
  }
}
