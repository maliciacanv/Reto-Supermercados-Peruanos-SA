import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.sass']
})
export class CreateClientComponent {

  constructor() { }
  
  saveData(name, firstLastName, secondLastName, age, birthData) {
    console.log(name, firstLastName, secondLastName, age, birthData)
  }

}
