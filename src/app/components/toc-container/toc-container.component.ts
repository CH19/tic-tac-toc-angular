import { Component } from '@angular/core';

@Component({
  selector: 'app-toc-container',
  templateUrl: './toc-container.component.html',
  styleUrls: ['./toc-container.component.scss']
})
export class TocContainerComponent {
  arr = [1,2,3,4,5,6,7,8,9];
  player1 = 'X';
  player2 = 'O';
  return = false;
  clicked = true;
  print(){
    this.return == this.clicked ? this.player1 : this.player2
  }
}
