import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent {
  canct: boolean = false
  @Input() turn: 'X' | 'O' = 'O'
  toogle(){
    this.canct = !this.canct;
  }
  print(){
    this.toogle();
    this.canct ? this.turn = 'X': this.turn = 'O';
  }
}
