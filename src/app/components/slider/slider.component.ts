import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  images = [
    'https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1562026700-3425431ecb5b%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dhealing%252Bhands%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8aGVhbGluZyUyMGhhbmRzfGVufDB8fHx8MTcxNTM2NTM2MHww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60',
    'https://static.vecteezy.com/system/resources/previews/019/859/704/non_2x/girls-and-boys-holding-hands-on-the-green-background-of-the-tree-the-concept-of-working-together-for-success-free-photo.JPG',
    'https://media.es.wired.com/photos/648895b6a566376ee967bf0e/16:9/w_2560%2Cc_limit/GettyImages-1436807309.jpg',
    'https://centromedicoabc.com/storage/2023/01/salud-mental.jpg',
  ];

  currentIndex = 0;
  intervalId: number | undefined; // Stores the timer reference

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer(); // Clear the timer when component is destroyed
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change this value to adjust slide transition interval (in milliseconds)
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
