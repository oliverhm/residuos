import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private actionSheetCtrl: ActionSheetController) {

  }


	btnActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'O QUE VOCÊ DESEJA FAZER:',
      buttons: [
        {
          text: 'SOLICITAR CAÇAMBA',
          role: 'solicitar-cacamba',
          handler: () => {
            console.log('SOLICITAR CAÇAMBA clicked');
            // this.navCtrl.parent.select(2);
          }
        },
        {
          text: 'RETIRAR CAÇAMBA',
          role: 'retirar-cacamba',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'SOLICITAR ACESSORIA',
          role: 'solicitar-acessoria',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'COMPRA | VENDA | TROCA',
          role: 'compra-venda-troca',
          handler: () => {
            console.log('VENDAS clicked');
            this.navCtrl.parent.select(1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
