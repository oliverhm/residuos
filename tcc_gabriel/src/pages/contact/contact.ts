import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CadastroPagePage } from "../cadastro/cadastro";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  opened2: boolean = false;
  opened: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  navCadastroPage() {
    this.navCtrl.push(CadastroPagePage);
  }

  openRadio() {
    this.opened = true;
  }

  openRadio2() {
    this.opened2 = true;
  }
}
