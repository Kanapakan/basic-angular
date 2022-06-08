import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics'
  name = 'kanapa kanwiwat'
  imgURL = 'https://picsum.photos/id/237/536/354'
  currentDate = new Date()
  cost = 500
  temperature = 25.31
  pizza = {
    toppings: [ 'pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false
  fontSize = 16

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }
}
