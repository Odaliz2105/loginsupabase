import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class Tab6Page {

  nombrePokemon = '';
  pokemon: any;

  constructor(private http: HttpClient) {}

  buscarPokemon() {

    this.http.get(
      `https://pokeapi.co/api/v2/pokemon/${this.nombrePokemon.toLowerCase()}`
    ).subscribe((data) => {

      this.pokemon = data;

    });

  }

}