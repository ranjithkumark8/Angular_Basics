import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basics';
  imgUrl = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
  ];
  date = new Date();
  blueClass = false;
  fontSize = 20;
  getName() {
    return this.title;
  }

  changeImage(event: KeyboardEvent) {
    this.imgUrl = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
