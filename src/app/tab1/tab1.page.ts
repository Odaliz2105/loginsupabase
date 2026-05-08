import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ]
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {

    const alert = await this.alertController.create({
      header: 'Bienvenida',
      message: 'Hola Odaliz 👋',
      buttons: ['OK']
    });

    await alert.present();
  }
}