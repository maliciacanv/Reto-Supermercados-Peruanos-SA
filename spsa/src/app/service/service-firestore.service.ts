import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ServiceFirestoreService {

  constructor(public dataService: AngularFirestore) { }

  addDatClient(data: object) {
    this.dataService.collection('clientes').add(data)
  }

  getDatClient() {
    return this.dataService.collection('clientes').valueChanges()
  }
  

}
