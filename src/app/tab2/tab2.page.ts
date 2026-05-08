import { Component } from '@angular/core';

import { addIcons } from 'ionicons';

import {
  school,
  laptop,
  business,
  code,
  construct,
  analytics,
  ribbon
} from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonText,
  IonChip,
  IonIcon,
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonProgressBar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAvatar,
    IonText,
    IonChip,
    IonIcon,
    IonLabel,
    IonList,
    IonItem,
    IonListHeader,
    IonProgressBar
  ]
})
export class Tab2Page {

  constructor() {

    addIcons({
      school,
      laptop,
      business,
      code,
      construct,
      analytics,
      ribbon
    });

  }

}