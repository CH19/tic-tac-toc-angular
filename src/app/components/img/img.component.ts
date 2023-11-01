import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = '';
  @Input() text: string = '';
  @Output() lodaded = new EventEmitter<string>()
  default = 'https://i.pinimg.com/736x/bf/53/a2/bf53a2bd690bb28591e50201bf3cbb63.jpg'
  imgDefault(){
    this.img = this.default;
    this.text = this.default
  }
  loaded(){
    console.log('cargo')
    console.log(`la imagen es ${this.text}`);
    this.lodaded.emit(this.text);
  }
}
