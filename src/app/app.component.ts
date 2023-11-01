import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-2';
  counter = 0;
  texto = '';
  images: string[] = ['https://i.pinimg.com/564x/4f/39/96/4f3996241547faa96f5f8741d8d83357.jpg', 'https://i.pinimg.com/736x/e5/03/86/e50386e054c2ea8b6c1e198f168ce6c2.jpg']
  onLoaded(img: string){
    console.log('log de padre');
    console.log('cargado ' +  img);
  }
  interval = 0;
  changeInterval = ()=>{
    // const timer = setInterval(()=>{this.interval = Math.round(Math.random() * 100)}, 3000);
    this.counter++;
    if(this.interval == 1){
      // clearInterval(timer);
    }
    return this.interval
  }
}
