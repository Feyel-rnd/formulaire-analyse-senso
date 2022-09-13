import { Component, VERSION } from '@angular/core';
//import { db } from './firebase';
//import { collection, getDocs } from 'firebase/firestore/lite';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
  ...
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  item$: Observable<Item[]>;
  constructor(firestore: Firestore) {
    const collection = collection(firestore, 'items');
    this.item$ = collectionData(collection);
  }
}
