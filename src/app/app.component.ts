import { Component, VERSION } from '@angular/core';
import { db } from './firebase';
//import { collection, getDocs } from 'firebase/firestore/lite';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
