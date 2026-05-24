import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student',
    standalone: true,
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent{
  name = "Shubham";
  age = "23";
  imageUrl = "https://cdn-icons-png.flaticon.com/512/4140/4140048.png";
  message = "";

  showMessage(){
    this.message = "Button Clicked!";
  }

}
